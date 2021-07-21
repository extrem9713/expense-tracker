const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const toDate = require('./tools/handlebarsHelpers')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3000

require('./config/mongoose')

app.engine('hbs', exphbs({defaultLayout:'main',
 extname:'.hbs', helpers: { toDate }}))
app.set('view engine', 'hbs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(routes)


app.listen(PORT, () => {
  console.log(`this app is running on http://localhost:${PORT}`)
})
