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

module.exports = router