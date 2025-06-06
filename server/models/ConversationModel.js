const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  text: {
    type: String,
    default: ""
  },
  imageUrl: {
    type: String,
    default: ""
  },
  videoUrl: {
    type: String,
    default: ""
  },
  seen: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const conversationSchema = mongoose.Schema({
  sender: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User'
  },
  receiver: {
    type: String,
    required: true,
    ref: 'User'
  },
  message: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Message'
    }
  ]
}, {
  timestamps: true
})

const MessageModel = mongoose.model('Message', messageSchema)
const ConversationModel = mongoose.model('Conversation', conversationSchema)

module.exports = {
  MessageModel,
  ConversationModel
}