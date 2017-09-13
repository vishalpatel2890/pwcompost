const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const User = mongoose.model('users')

//===================================================>
//serialize/deseralize Users

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

//===================================================>
//signup with Google

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ 'google.id': profile.id })

      if (existingUser) {
        // console.log('profile', profile)
        return done(null, existingUser)
      }

      const user = await new User({
        'google.id': profile.id,
        name: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value
      }).save()
      done(null, user)
    }
  )
)
// ========================================================>
//local sign up

passport.use(
  'local-signup',
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    function(req, email, password, done) {
      if (email) email = email.toLowerCase()

      process.nextTick(function() {
        User.findOne({ email: email }, function(err, user) {
          // if there are any errors, return the error
          if (err) return done(err)

          // check to see if theres already a user with that email
          if (user) {
            return done(
              null,
              false,
              req.flash('signupMessage', 'That email is already taken.')
            )
          } else {
            // create the user
            var newUser = new User()

            newUser.local.email = email
            newUser.local.password = newUser.generateHash(password)

            newUser.save(function(err) {
              if (err) return done(err)

              return done(null, newUser)
            })
          }
        })
      })
    }
  )
)
