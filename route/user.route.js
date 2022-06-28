const express = require('express')
const router = express.Router()
const userController = require('../controller/user.controller')

router.get('/login',userController.getLoginForm)
router.post('/login',userController.login)
router.get('/signup',userController.getSignup)
router.post('/signup',userController.signup)

module.exports = router