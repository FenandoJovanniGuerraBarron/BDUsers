const router = require('express').Router()

const taskServices = require('./tasks.services')

router.get('/users',taskServices.getAllUsers)
router.post('/users',taskServices.postUser)
router.get('/users/:id',taskServices.getUserById)
router.put('/users/:id',taskServices.patchUser)
router.delete('/users/:id',taskServices.removeUser)

module.exports = router