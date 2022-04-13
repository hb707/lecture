const express = require('express')
const router = express.Router()

router.get('/api/home', (req, res) => {
    console.log('Back Router ON')
})

module.exports = router