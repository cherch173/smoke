const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const EndeavorRouter = require('./routes/EndeavorRouter')
const GenreRouter = require('./routes/GenreRouter')
const CommentRouter = require('./routes/CommentRouter')
const AuthRouter = require('./routes/AuthRouter')

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(`${__dirname}/client/dist`))

app.use('/endeavors', EndeavorRouter)
app.use('/genres', GenreRouter)
app.use('/comments', CommentRouter)
app.use('/users', AuthRouter)

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/dist/index.html`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
