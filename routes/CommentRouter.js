const router = require('express').Router()
const controller = require('../controllers/CommentController')

router.get('/', controller.getComments)
router.post('/', controller.CreateComment)

module.exports = router