const router = require('express').Router()
const controller = require('../controllers/EndeavorController')

router.get('/', controller.getEndeavors)

module.exports = router