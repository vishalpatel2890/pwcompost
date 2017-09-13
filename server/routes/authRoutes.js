const passport = require('passport')
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const User = mongoose.model('users')

module.exports = app => {
  //forward to google for authentication
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )

  //google redirect after auth
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      if (req.user.address) {
        res.redirect('/')
      } else {
        res.redirect('/signup')
      }
    }
  )

  //process login form
  app.post(
    '/email-login',
    passport.authenticate('local-login', {
      successRedirect: '/dashboard',
      failureRedirect: '/email-login',
      failureFlash: true
    })
  )

  app.post(
    '/email-signup',
    passport.authenticate('local-signup'),
    (req, res) => {
      res.send('Whatsup')
    }
  )

  //logout
  app.get('/api/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  //check current user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })

  //post service form to user document
  app.post('/api/service', requireLogin, async (req, res) => {
    const {
      address,
      city,
      state,
      zipcode,
      neighborhood,
      othernhood,
      phone,
      referral,
      referralname,
      adultno,
      childno,
      binloc,
      donate
    } = req.body
    try {
      query = { _id: req.user.id }
      update = {
        address,
        city,
        state,
        zipcode,
        neighborhood,
        othernhood,
        phone,
        referral,
        referralname,
        adultno,
        childno,
        binloc,
        donate
      }

      await User.update(query, update, { multi: true })
      res.send('User is saved')
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
