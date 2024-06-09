const { Router } = require("express")
const { Arithmetic } = require("./arithmetic")

const validateArithmeticInputs = (req, isDivision = false) => {

    const query = req.query
    const errors = []

    if (!query || query.a === undefined || query.b === undefined) {
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

        if (isNaN(a) || isNaN(b)) {
            throw new Error('query params "a" and "b" should be numbers')
        }
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
            type: 'zeroDivisionError'
        })
    }

    return { 
        inputs: { a, b },
        errors,
    }

}

const validateIntNumberInput = (req) => {
    const query = req.query
    
    try {
        const n = query.n;
        return {
            n: parseInt(n),
            error: null,
        }
            
    } catch (err) {
        console.log(err)

        return {
            n: null,
            error: {
                statusCode: 400,
                msg: '"n" is required and should be an integer number',
                type: "inputError",
            }
        }
    }
}

const handleSum = (req, res) => {
    const { inputs, errors } = validateArithmeticInputs(req)
    
    if (errors.length > 0) {
        return res.status(errors[0].statusCode).send({
            msg: "Invalid input, please check the following errors",
            errors,
        })
    }

    const { a, b } = inputs
    const result = Arithmetic.sum(a, b)
    
    return res.status(200).send({
        result
    })
}

const handleMult = (req, res) => {
    const { inputs, errors } = validateArithmeticInputs(req)

    if (errors.length > 0) {
        return res.status(errors[0].statusCode).send({
            msg: "Invalid input, please check the following errors",
            errors,
        })
    }

    const { a, b } = inputs

    const result = Arithmetic.mult(a, b)
    
    return res.status(200).send({
        result
    })
}

const handleSub = (req, res) => {
    const { inputs, errors } = validateArithmeticInputs(req)

    if (errors.length > 0) {
        return res.status(errors[0].statusCode).send({
            msg: "Invalid input, please check the following errors",
            errors,
        })
    }

    const { a, b } = inputs

    const result = Arithmetic.sub(a, b)
    
    return res.status(200).send({
        result
    })
}

const handleDiv = (req, res) => {

    const { inputs, errors } = validateArithmeticInputs(req, true)

    if (errors.length > 0) {
        return res.status(errors[0].statusCode).send({
            msg: "Invalid input, please check the following errors",
            errors,
        })
    }

    const { a, b } = inputs

    const result = Arithmetic.div(a, b)
    
    return res.status(200).send({
        result
    })
}

const handleFactorial = (req, res) => {
    const { n, error } = validateIntNumberInput(req)

    if (error !== null) {
        req.status(error.statusCode).send({ 
            msg: "Error while validating inputs",
            error: error.msg,
            type: error.type,
        })
        return
    }
    
    try {
        const result = Arithmetic.fact(n)
        res.status(200).send({
            result
        })
    } catch (err) {
        if (err.message.includes('Cannot calculate factorial')) {
            res.status(400).send({
                msg: "Out of range input",
                error: err.message
            })

            return
        }
    }
}

const handleFibonacci = (req, res) => {

    const { n, error } = validateIntNumberInput(req)

    if (error !== null) {
        req.status(error.statusCode).send({ 
            msg: "Error while validating inputs",
            error: error.msg,
            type: error.type,
        })
        return
    }

    try {

        const result = Arithmetic.fib(n)
        res.status(200).send({
            result
        })

    } catch (err) {
        
        if (err.message.includes('Cannot calculate fibonacci')) {
            res.status(400).send({
                msg: "Out of range input",
                error: err.message
            })

            return
        }

        res.status(500).send({
            msg: "Server error",
            err
        })
        
    }
}

const getArithmeticRouter = (mountPath) => {
    const router = Router()

    // Basic Arithmetic Operations
    router.get(`${mountPath}/sum`, handleSum)
    router.get(`${mountPath}/mult`, handleMult)
    router.get(`${mountPath}/sub`, handleSub)
    router.get(`${mountPath}/div`, handleDiv)

    // Mathematic (more complex) Arithmetic Operations
    router.get(`${mountPath}/factorial`, handleFactorial)
    router.get(`${mountPath}/fibonacci`, handleFibonacci)

    return router
}

module.exports = {
    getArithmeticRouter,
    handleSum,
    handleMult,
    handleSub,
    handleDiv,
    handleFactorial,
    handleFibonacci,
}