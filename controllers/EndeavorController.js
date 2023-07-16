const { Endeavor } = require('../models')

const getEndeavors = async (req, res) => {
    try {
        const endeavors = await Endeavor.find({}).populate('comments')
        res.send(endeavors)
    } catch (error) {
        throw error
    }
}

const getEndeavorById = async (req, res) => {
    try {
        const endeavor = await Endeavor.findById(req.params.id).populate('comments')
        console.log(endeavor)
        res.send(endeavor)
    } catch (error) {
        throw (error)
    }
}

const CreateEndeavor = async (req, res) => {
    try {
        const endeavor = await Endeavor.create(req.body)
        console.log(endeavor)
        res.send(endeavor)
    } catch (error) {
        throw error
    }
}

const UpdateEndeavor = async (req, res) => {
    try {
        const endeavor = await Endeavor.findByIdAndUpdate(req.params.endeavor_id, req.body, { new: true })
        res.send(endeavor)
    } catch (error) {
        throw error
    }
}

const DeleteEndeavor = async (req, res) => {
    try {
        await Endeavor.deleteOne({ _id: req.params.endeavor_id })
        res.send({ msg: 'Post Deleted', payload: req.params.endeavor_id, status: 'Ok' })
    } catch (error) {
        throw error
    }
}

const addLike = async (req, res) => {
    try {
        const endeavor = await Endeavor.findById(req.params.endeavor_id)
        endeavor.fireButton.push(req.params.user_id)
        await endeavor.save()
        res.status(201).send({ msg: 'you liked this endeavor', status: 'liked', endeavor })
    } catch (error) {
        throw error
    }
}

const disLike = async (req, res) => {
    try {
        const endeavor = await Endeavor.findById(req.params.endeavor_id)
        endeavor.fireButton.splice(endeavor.fireButton.indexOf(req.params.user_id), 1)
        console.log(endeavor)
        await endeavor.save()
        res.status(201).send({ msg: 'you downvoted this endeavor', status: 'disliked', endeavor })
    } catch (error) {
        throw error
    }
}


module.exports = {
    getEndeavors,
    CreateEndeavor,
    UpdateEndeavor,
    DeleteEndeavor,
    getEndeavorById,
    addLike,
    disLike
}