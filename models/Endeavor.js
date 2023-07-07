const { Schema } = require('mongoose')

const fireButtonSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

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
        fireButton: [fireButtonSchema],
        comments: {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    },
    { timestamps: true }
)



module.exports = endeavorSchema