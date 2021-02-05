 const signup = require ('./controllers');
 
 
 const router = require('express').Router();
router.get('/hi', (req, res) => {
    res.send('hello')
})
router.post('/signup', signup)
module.exports = router

