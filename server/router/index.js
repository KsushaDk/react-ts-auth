const Router = require('express').Router
const router = new Router()

router.post('/registration')
router.post('/login')
router.post('/logout')

// mail activate
router.get('/activate/:link')
// refresh access token
router.get('/refresh')

router.get('/users')

module.exports = router
