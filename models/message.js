const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Message', MessageSchema);