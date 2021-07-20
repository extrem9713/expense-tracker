const express = require('express')
const home = require('./modules/home')
const expenceTrackers = require('./modules/expenceTrackers')

const router = express.Router()

router.use('/', home)


module.exports = router