const router = require('express').Router()
const controller = require('../controllers/EndeavorController')

router.get('/', controller.getEndeavors)
router.post('/', controller.CreateEndeavor)

module.exports = router