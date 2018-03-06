const mongoose = require('mongoose')
const mongooseUniqueValidator = require('mongoose-unique-validator')
const UserSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: {type: String, required: true },
  email: { type: String, required: true, unique: true },
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }] 
})

UserSchema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('User', UserSchema);