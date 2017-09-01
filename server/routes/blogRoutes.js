const requireLogin = require('../middlewares/requireLogin')
const mongoose = require('mongoose')

const Blog = mongoose.model('blog')

module.exports = app => {
  //blog endpoint
  app.get('/api/blog', requireLogin, (req, res) => {
    res.send('Hello')
  })

  app.post('/api/blog', requireLogin, async (req, res) => {
    const { title, body } = req.body

    const blog = new Blog({
      title,
      body,
      _user: req.user.id,
      author: req.user.name,
      datePosted: Date.now()
    })
    try {
      await blog.save()
      res.send('Blog Saved')
    } catch (err) {
      res.status(422).send(err)
    }
  })
}
