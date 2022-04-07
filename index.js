const express = require('express')
const app = express()
const port = 3000

//connect ejs
app.set('view engine', 'ejs')

//build-in middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.use('/', (req, res) => {
	res.status(404)
	res.render('404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})