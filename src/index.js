const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const jwtMiddleware = require('./middlewares/jwt.middleware')
const swaggerDocument = YAML.load('./swagger.yaml')

const chatRoutes = require('./routes/chat.routes')
const authRoutes = require('./routes/auth.routes')
const userRoutes = require('./routes/user.routes')
const metricsRoutes = require('./routes/metrics.routes')

const port = process.env.PORT || 8080
const app = express()
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/chat', jwtMiddleware, chatRoutes)
app.use('/user', jwtMiddleware, userRoutes)
app.use('/metrics', jwtMiddleware, metricsRoutes)
app.use('/auth', authRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Online')
})

app.listen(port, () => console.log(`Iniciado na porta ${port}`))