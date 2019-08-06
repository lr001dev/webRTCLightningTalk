const express = require(`express`)
const app = express()
const port = 3000


app.get(`/`, (req,res) => {
  // res.send(`Hello`)
  res.render(`index.ejs`)
})

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.listen(port, () => {
  console.log(`Listening to port ` + port)
})
