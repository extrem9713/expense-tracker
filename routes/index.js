const express = require('express')
const home = require('./modules/home')
const expenceTrakers = require('./modules/expence-trackers')

const router = express.Router()

router.use('/', home)
router.use('/expenceTrakers', expenceTrakers)

module.exports = router