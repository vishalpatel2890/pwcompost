const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const keys = require('./config/keys')
const flash = require('connect-flash')

require('./models/user')
require('./models/blog')
require('./config/passport')

mongoose.Promise = global.Promise
mongoose.connect(keys.mongoURI)

const app = express()

app.use(bodyParser.json())
//setup cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//require/bundle routes
require('./routes/authRoutes')(app)
require('./routes/blogRoutes')(app)

const PORT = process.env.PORT || 5001
app.listen(PORT)
