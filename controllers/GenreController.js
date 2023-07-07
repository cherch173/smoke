const { Genre } = require('../models')

const getGenres = async (req, res) => {
    try {
        const genres = await Genre.find({})
        res.send(genres)
    } catch (error) {
        throw error
    }
}

const CreateGenre = async (req, res) => {
    try {
        const genre = await Genre.create(req.body)
        console.log(genre)
        res.send(genre)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getGenres,
    CreateGenre
}