const { Endeavor } = require('../models')

const getEndeavors = async (req, res) => {
    try {
        const endeavors = await Endeavor.find({})
        res.send(endeavors)
    } catch (error) {
        throw error
    }
}

module.exports = {
    getEndeavors
}