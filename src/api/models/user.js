const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    passwordHash: Number,
    score: Number,
    loggedSocketID: String,
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject.passwordHash
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model("User", userSchema);
