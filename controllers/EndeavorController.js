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

// Add fireButton Create
// note: in both delete and like, first find the endeavor by Id
// then utilize dot notation to push new data and then save() the endeavor
// once its pushed. same for delete just remove as opposed to save.



// Add firebutton Delete

module.exports = {
    getEndeavors,
    CreateEndeavor
}