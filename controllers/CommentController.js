const { Comment } = require('../models')
const { Endeavor } = require('../models')
const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({})
        res.send(comments)
    } catch (error) {
        throw error
    }
}

const CreateComment = async (req, res) => {
    try {
        const comment = await Comment.create(req.body)
        // go to database and find endeavor to assosciate comment with
        const endeavor = await Endeavor.findById(req.params.endeavor_id)
        // then, push the ID into the comment array you retrieved
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const UpdateComment = async (req, res) => {
    try {
        const comment = await Comment.findByIdAndUpdate(req.params.comment_id, req.body, { new: true })
        res.send(comment)
    } catch (error) {
        throw error
    }
}

const DeleteComment = async (req, res) => {
    try {
        await Comment.deleteOne({ _id: req.params.comment_id })
        res.send({ msg: 'Post Deleted', payload: req.params.comment_id, status: 'Ok' })
    } catch (error) {
        throw error
    }
}

module.exports = {
    getComments,
    CreateComment,
    UpdateComment,
    DeleteComment
}