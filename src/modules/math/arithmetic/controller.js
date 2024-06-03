const { Router } = require('express')
const { Arithmetic } = require('./arithmetic')

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

    // TODO: See wether a Singleton constructor with arguments exists and 
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

    initializeRoutes () {
        const router = Router()

        router.get(`${this.path}/sum`, (req, res) => {

            const query = req.query
            
            if (!query || !query.a || !query.b) {
                res.status(400).send({
                    error: 'query params "a" and "b" are required'
                })
                return
            }

            // Input Validation
            let a
            let b

            try {
                a = parseFloat(query.a)
                b = parseFloat(query.b)
            } catch (err) {
                res.status(400).send({
                    error: 'query params "a" and "b" should be numbers'
                })
                return
            }

            const result = Arithmetic.sum(a, b)
            res.status(200).send({
                result
            })
        })

        router.get(`${this.path}/mult`, (req, res) => {

            const query = req.query
            
            if (!query || !query.a || !query.b) {
                res.status(400).send({
                    error: 'query params "a" and "b" are required'
                })
                return
            }

            // Input Validation
            let a
            let b

            try {
                a = parseFloat(query.a)
                b = parseFloat(query.b)
            } catch (err) {
                res.status(400).send({
                    error: 'query params "a" and "b" should be numbers'
                })
                return
            }

            const result = Arithmetic.mult(a, b)
            res.status(200).send({
                result
            })
        })

        this.router = router
    }
}

module.exports = {
    ArithmeticController,
}