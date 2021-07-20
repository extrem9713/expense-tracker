const express = require('express')
const Category = require('../../models/category')
const record = require('../../models/record')
const Record = require('../../models/record')
const router = express.Router()

router.get('/', (req,res) =>{
  const category = req.query.category
  const filter = {}
  if(category){filter.category = category}

  const categories = []
  Category.find()
  .lean()
  .then(category => categories.push(...category))
  .catch(error => console.error(error))

  Record.find(filter)
  .populate('category')
  .lean()
  .then((records) => {
    let totalAmount = 0
    records.forEach(record => totalAmount += record.amount)
    res.render('index',{categories, category, record, totalAmount})
  })
  .catch(error => console.error(error))
})

module.exports = router