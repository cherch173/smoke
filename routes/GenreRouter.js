const router = require('express').Router()
const controller = require('../controllers/GenreController')

router.get('/', controller.getGenres)
router.post('/', controller.CreateGenre)

module.exports = router