const { Schema } = require('mongoose')

const endeavorSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: Image },
        genres: [genreSchema],
        website: { type: URL },
        description: { type: String },
        fireButton: { type: Boolean, default: false },
        comments: [commentSchema]
    },
    { timestamps: true }
)

const genreSchema = new Schema(
    {
        genre: {
            type: String,
            enum: ['Animation', 'Art', 'App', 'Article', 'Biology', 'Blog', 'Book', 'Chemistry', 'Comedy', 'Experiment', 'Film', 'Gaming', 'Graphic Design', 'Intellectual Property', 'Invention', 'Music', 'Musical Theater', 'Play', 'Poetry', 'Programming', 'Physics', 'Science', 'Short', 'Space', 'Stand-Up Comedy', 'Theorem', 'Theory', 'Thesis', 'Video Game', 'Web Application', 'Other'],
            required: true,
            max: 3
        }
    }
)

module.exports = endeavorSchema