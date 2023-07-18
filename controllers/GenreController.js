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
        res.send(genre)
    } catch (error) {
        throw error
    }
}

const UpdateGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndUpdate(req.params.genre_id, req.body, { new: true })
        res.send(genre)
    } catch (error) {
        throw error
    }
}

const DeleteGenre = async (req, res) => {
    try {
        await Genre.deleteOne({ _id: req.params.genre_id })
        res.send({ msg: 'Post Deleted', payload: req.params.genre_id, status: 'Ok' })
    } catch (error) {
        throw error
    }
}



module.exports = {
    getGenres,
    CreateGenre,
    UpdateGenre,
    DeleteGenre
}