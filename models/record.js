const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name:{
    type: String,
    require: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  date: {
    type: Date,
    require: true
  },
  amount: {
    type:Number,
    requrie: true
  }
})

module.exports = mongoose.model('Record', recordSchema)