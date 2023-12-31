const router = require('express').Router()
const controller = require('../controllers/EndeavorController')
const middleware = require('../middleware')

router.get('/', controller.getEndeavors)
router.get('/:id', controller.getEndeavorById)
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
router.put(
    '/:endeavor_id/:user_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.addLike
)
router.put(
    '/:endeavor_id/:user_id/dislike',
    middleware.stripToken,
    middleware.verifyToken,
    controller.disLike
)

router.delete(
    '/:endeavor_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteEndeavor
)

module.exports = router