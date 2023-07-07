const { Schema } = require('mongoose')

const genreSchema = new Schema(
    {
        genre: {
            type: String,
            enum: ['Animation', 'Art', 'App', 'Article', 'Biology', 'Blog', 'Book', 'Chemistry', 'Comedy', 'Documentary', 'Experiment', 'Film', 'Gaming', 'Graphic Design', 'Intellectual Property', 'Invention', 'Mathematics', 'Music', 'Musical Theater', 'Play', 'Poetry', 'Programming', 'Physics', 'Recipe', 'Science', 'Short', 'Space', 'Stand-Up Comedy', 'Theorem', 'Theory', 'Thesis', 'Video Game', 'Web Application', 'Website', 'Other'],
            // required: true,
            maxItems: 3
        }
    },
    { timestamps: true }
)

module.exports = genreSchema