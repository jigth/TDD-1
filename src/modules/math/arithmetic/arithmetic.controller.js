const { getArithmeticRouter } = require('./arithmetic.routes')

class ArithmeticController {
    path
    router
    static instance

    constructor (mountPath) {
        if (!mountPath) {
            console.error('Mount path cannot be empty')
            process.exit(1)
        }
        this.path = mountPath
        this.initializeRoutes(mountPath)
    }

    // TODO: See wheter a Singleton constructor with arguments exists and 
    // how it is usually defined
    static getInstance (mountPath) {
        if (!this.instance) {
            this.instance = new ArithmeticController(mountPath)
        }
        return this.instance
    }

    getPath () {
        return this.path
    }

    getRouter () {
        return this.router
    }

    initializeRoutes (mountPath) {
        const router = getArithmeticRouter(mountPath)

        this.router = router
    }
}

module.exports = {
    ArithmeticController,
}