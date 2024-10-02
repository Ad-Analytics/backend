const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 8080
const app = express()
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.status(200).send('Online')
})

app.listen(port, () => console.log(`Iniciado na porta ${port}`))