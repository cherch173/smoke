const { Schema } = require('mongoose')


const endeavorSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String },
        genres: {
            type: String,
            enum: ['Animation', 'Art', 'App', 'Article', 'Biology', 'Blog', 'Book', 'Chemistry', 'Comedy', 'Documentary', 'Experiment', 'Film', 'Gaming', 'Graphic Design', 'Intellectual Property', 'Invention', 'Lyricism', 'Mathematics', 'Medicine', 'Microbiology', 'Music', 'Musical Theater', 'Play', 'Poetry', 'Programming', 'Physics', 'Recipe', 'Science', 'Short', 'Space', 'Stand-Up Comedy', 'Theorem', 'Theory', 'Thesis', 'Video Game', 'Web Application', 'Website', 'Other'],
            // required: true,
            maxItems: 3
        },
        website: { type: String },
        description: { type: String },
        fireButton: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
            // unique: true
        }],
        comments: {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    },
    { timestamps: true },
    { autoIndex: false }
)

// endeavorSchema.index({ fireButton: 1, endeavor: 1 }, { unique: true });

module.exports = endeavorSchema