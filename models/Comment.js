const { Schema } = require('mongoose')

const commentSchema = new Schema(
    {
        date: {
            type: Date
        },
        comment: {
            type: String,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            // required: true
        },
        userName: String,
        userAvatar: String
    }, { timestamps: true }
)

module.exports = commentSchema