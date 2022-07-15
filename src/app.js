const express = require('express')
const pastes = require('./data/pastes-data')
const app = express()

const usersRouter = require('./users/users.router')
const pastesRouter = require('./pastes/pastes.router')

app.use(express.json())

// TODO: Follow instructions in the checkpoint to implement ths API.
app.use('/users', usersRouter)
app.use('/pastes', pastesRouter) // Note: app.use

// Not found handler
app.use((req, res, next) => {
	next(`Not found: ${req.originalUrl}`)
})

// Error handler
app.use((error, req, res, next) => {
	console.error(error)
	const { status = 500, message = 'Something went wrong' } = error
	res.status(status).json({ error: message })
})

module.exports = app
