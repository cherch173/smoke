const { Endeavor } = require('../models')
const getEndeavors = async (req, res) => {
    try {
        const endeavors = await Endeavor.find({})
        res.send(endeavors)
    } catch (error) {
        throw error
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

module.exports = {
    getEndeavors,
    CreateEndeavor
}