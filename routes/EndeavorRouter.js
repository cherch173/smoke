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
router.put(
    '/:endeavor_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateEndeavor
)

router.delete(
    '/:endeavor_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteEndeavor
)

module.exports = router