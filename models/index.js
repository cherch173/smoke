const mongoose = require('mongoose')
const endeavorSchema = require('./Endeavor')

const Endeavor = mongoose.model('Endeavor', endeavorSchema)

module.exports = {
    Endeavor
}