const { Router } = require("express")
const { Arithmetic } = require("./arithmetic")

const validateArithmeticInputs = (req, isDivision = false) => {

    const query = req.query
    const errors = []

    if (!query || !query.a || !query.b) {
        return {
            input: { a: null, b: null },
            errors: [{
                statusCode: 400,
                errorMsg: 'query params "a" and "b" are required',
                type: 'inputEmptyError'
            }]
        }
    }

    // Input Validation
    let a
    let b

    try {
        a = parseFloat(query.a)
        b = parseFloat(query.b)
    } catch (err) {
        errors.push({
            statusCode: 400,
            error: 'query params "a" and "b" should be numbers',
            type: 'inputFormatError'
        })
    }

    // Division by Zero validation
    if (isDivision && parseInt(b) === 0) {
        errors.push({
            statusCode: 422,
            error: '"b" should not be zero when using division',
            type: 'inputDivisionError'
        })
    }

    return { 
        inputs: { a, b },
        errors,
    }

}


const getArithmeticRouter = (mountPath) => {
    const router = Router()

    router.get(`${mountPath}/sum`, (req, res) => {

        const { inputs, errors } = validateArithmeticInputs(req)

        if (errors.length > 0) {
            res.status(errors[0].statusCode).send({
                msg: "Invalid input, please check the following errors",
                errors,
            })
            return
        }

        const { a, b } = inputs
        const result = Arithmetic.sum(a, b)
        
        res.status(200).send({
            result
        })
    })

    router.get(`${mountPath}/mult`, (req, res) => {

        const { inputs, errors } = validateArithmeticInputs(req)

        if (errors.length > 0) {
            res.status(errors[0].statusCode).send({
                msg: "Invalid input, please check the following errors",
                errors,
            })
            return
        }

        const { a, b } = inputs

        const result = Arithmetic.mult(a, b)
        res.status(200).send({
            result
        })
    })

    router.get(`${mountPath}/sub`, (req, res) => {

        const { inputs, errors } = validateArithmeticInputs(req)

        if (errors.length > 0) {
            res.status(errors[0].statusCode).send({
                msg: "Invalid input, please check the following errors",
                errors,
            })
            return
        }

        const { a, b } = inputs

        const result = Arithmetic.sub(a, b)
        res.status(200).send({
            result
        })
    })

    router.get(`${mountPath}/div`, (req, res) => {

        const { inputs, errors } = validateArithmeticInputs(req, true)

        if (errors.length > 0) {
            res.status(errors[0].statusCode).send({
                msg: "Invalid input, please check the following errors",
                errors,
            })
            return
        }

        const { a, b } = inputs

        const result = Arithmetic.div(a, b)
        res.status(200).send({
            result
        })
    })

    return router
}

module.exports = {
    getArithmeticRouter,
}