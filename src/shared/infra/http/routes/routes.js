const { Router } = require('express')

// Import controllers
const { ArithmeticController } = require("../../../../modules/math/arithmetic/arithmetic.controller")

const appRoutes = Router()

const getGlobalRoutes = () => {
    const router = Router()
    
    router.get('/', (req, res) => {
        res.status(200).send({
            msg: 'ok'
        })
    })

    router.get('/health', (req, res) => {
        res.status(200).send({
            health: 'ok'
        })
    })

    return router
}

const initRoutes = () => {
    const arithmetic = ArithmeticController.getInstance('/arithmetic')
    const arithmeticRouter = arithmetic.getRouter()

    const globalRoutes = getGlobalRoutes()

    appRoutes.use(arithmeticRouter)
    appRoutes.use(globalRoutes)
}

initRoutes()

// export routes object or class to be used in Express main file
module.exports = {
    appRoutes,
}