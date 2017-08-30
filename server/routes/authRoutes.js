const passport = require('passport')

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
    passport.authenticate('google')

    // (req, res) => {
    // res.redirect('/dashboard')

    // }
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
}
