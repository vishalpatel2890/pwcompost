const mongoose = require('mongoose')
const { Schema } = mongoose

const blogSchema = new Schema({
  title: String,
  body: String,
  author: String
})

mongoose.model('blog', blogSchema)
