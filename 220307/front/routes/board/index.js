const express = require('express')
const router = express.Router()
const { list, view, write, modify } = require('./boardController')


router.get('/list', list)

router.get('/view/:idx', view)

router.get('/write', (req, res) => {
    res.render('board_write')
})

router.get('/modify', (req, res) => {
    res.render('board_modify')
})

module.exports = router