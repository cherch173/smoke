const router = require('express').Router()
const controller = require('../controllers/EndeavorController')
const middleware = require('../middleware')

router.get('/', controller.getEndeavors)
router.post(
    '/', 
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateEndeavor
)

module.exports = router