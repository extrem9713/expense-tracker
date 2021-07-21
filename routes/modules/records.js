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

//edit
router.get('/:id/edit',(req, res) => {
  const id = req.params.id
  return Record.findById(id)
    .lean()
    .then(record => res.render('edit', {categories, record}))
    .catch(error => console.error(error))
})

router.put('/:id',(req, res) => {
  const id = req.params.id  
  return Record.findById(id)
    .then(record => {
      //用來複製一個或多個物件自身所有可數的屬性到另一個目標物件。
      Object.assign(record, req.body)
      return record.save()
  })
    .then(() =>res.redirect('/'))
    .catch(error => console.error(error))
})

module.exports = router