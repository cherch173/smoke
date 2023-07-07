const { Schema } = require('mongoose')

const genreSchema = new Schema(
    {
        genre: {
            type: String,
            enum: ['Animation', 'Art', 'App', 'Article', 'Biology', 'Blog', 'Book', 'Chemistry', 'Comedy', 'Experiment', 'Film', 'Gaming', 'Graphic Design', 'Intellectual Property', 'Invention', 'Music', 'Musical Theater', 'Play', 'Poetry', 'Programming', 'Physics', 'Science', 'Short', 'Space', 'Stand-Up Comedy', 'Theorem', 'Theory', 'Thesis', 'Video Game', 'Web Application', 'Other'],
            // required: true,
            maxItems: 3
        }
    },
    { timestamps: true }
)

module.exports = genreSchema