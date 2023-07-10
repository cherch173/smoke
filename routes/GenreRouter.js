const router = require('express').Router()
const controller = require('../controllers/GenreController')
const middleware = require('../middleware')

router.get('/', controller.getGenres)
router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken, 
    controller.CreateGenre
)
router.put(
    '/:genre_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateGenre
)

router.delete(
    '/:genre_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteGenre
)

module.exports = router