const mongoose = require('mongoose')
const endeavorSchema = require('./Endeavor')
const commentSchema = require('./Comment')
const genreSchema = require('./Genre')
const Endeavor = mongoose.model('Endeavor', endeavorSchema)
const Comment = mongoose.model('Comment', commentSchema)
const Genre = mongoose.model('Genre', genreSchema)

module.exports = {
    Endeavor,
    Comment,
    Genre
}