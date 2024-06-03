const express = require('express')
const app = express()
const { appRoutes } = require('./shared/infra/http/routes/routes')
const morgan = require('morgan')

// Middleware
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use(appRoutes)

app.listen(3000, () => {
    console.log('Listening on port 3000')
})