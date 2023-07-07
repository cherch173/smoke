const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const EndeavorRouter = require('./routes/EndeavorRouter')
const GenreRouter = require('./routes/GenreRouter')
const CommentRouter = require('./routes/CommentRouter')

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/endeavors', EndeavorRouter)
app.use('/genres', GenreRouter)
app.use('/comments', CommentRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
