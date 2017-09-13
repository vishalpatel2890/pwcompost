const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  googleId: String,
  name: String,
  lastName: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zipcode: String,
  neighborhood: String,
  othernhood: String,
  phone: String,
  referral: String,
  referralname: String,
  adultno: Number,
  childno: Number,
  binloc: String,
  donate: Boolean
})

mongoose.model('users', userSchema)
