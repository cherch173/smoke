const { Schema } = require('mongoose')

const endeavorSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String },
        genres: {
            type: Schema.Types.ObjectId,
            ref: 'Genre'
        },
        website: { type: String },
        description: { type: String },
        fireButton: { type: Boolean, default: false },
        comments: {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    },
    { timestamps: true }
)



module.exports = endeavorSchema