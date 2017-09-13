const mongoose = require('mongoose')
const { Schema } = mongoose

const bcrypt = require('bcrypt-nodejs')

const userSchema = new Schema({
  google: {
    id: String
  },
  local: {
    email: String,
    password: String
  },
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

//generate a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

// check if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}

mongoose.model('users', userSchema)
