const express = require('express')
const Record = require('../../models/record')
const Category = require('../../models/category')
const router = express.Router()

const categories = []
Category.find()
.lean()
.then(category => categories.push(...category))
.catch(error => console.error(error))

//create
router.get('/new', (req, res)=>{
  res.render('new', { categories })
})
router.post('/',(req, res) =>{
  Record.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

module.exports = router