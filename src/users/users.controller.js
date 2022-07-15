const users = require('../data/users-data')

function list(req, res) {
	res.send({ data: users })
}

function userExists(req, res, next) {
	const { userId } = req.params
	const foundUser = users.find((user) => user.id === Number(userId))
	if (foundUser) {
		res.locals.users = foundUser
		return next()
	}
	next({
		status: 400,
		message: `User id not found: ${userId}`,
	})
}

function read(req, res, next) {
	res.json({ data: res.locals.user })
}

module.exports = {
	list,
	read: [userExists, read],
	userExists,
}
