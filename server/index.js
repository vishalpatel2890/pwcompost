const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./config/passport')

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI)

const app = express()

//setup cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())

//require/bundle routes
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5001
app.listen(PORT)
