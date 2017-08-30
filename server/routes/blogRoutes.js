const requireLogin = require('../middlewares/requireLogin')
const mongoose = require('mongoose')

const Blog = mongoose.model('blog')

module.exports = app => {
  //blog endpoint
  app.get('/api/blog', (req, res) => {
    res.send('Hello')
  })

  app.post('./api/blog', requireLogin, async (req, res) => {
    const { title, body } = req.body

    const survey = new Blog({
      title,
      body,
      _user: req.user.id,
      author: req.user.name,
      datePosted: Date.now()
    })

    await survey.save()
  })
}
