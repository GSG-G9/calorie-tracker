 const router = require('express').Router();
router.get('/hi', (req, res) => {
    res.send('hello')
})
module.exports = router

