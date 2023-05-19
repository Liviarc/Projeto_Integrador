
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())


require ('./controllers/propostaController')(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

