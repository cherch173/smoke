const mongoose = require('mongoose')
const endeavorSchema = require('./Endeavor')
const commentSchema = require('./Comment')
const genreSchema = require('./Genre')
const userSchema = require('./User')
const Endeavor = mongoose.model('Endeavor', endeavorSchema)
const Comment = mongoose.model('Comment', commentSchema)
const Genre = mongoose.model('Genre', genreSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    Endeavor,
    Comment,
    Genre,
    User
}