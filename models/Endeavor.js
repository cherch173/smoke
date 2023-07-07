const { Schema } = require('mongoose')

const endeavorSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: Image },
        website: { type: URL },
        description: { type: String },
        fireButton: { type: Boolean, default: false },
    },
    { timestamps: true }
)

module.exports = endeavorSchema