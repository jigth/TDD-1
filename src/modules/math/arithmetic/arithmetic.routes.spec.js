const { handleSum, handleMult, handleDiv, handleSub } = require("./arithmetic.routes")

describe("Arithmetic routes", () => {

    let res

    beforeEach(() => {
        res = { status: (code) => ({ send: (result) => result }) }
    })

    describe("Sum", () => {
        it("should get { result: 15 } when summing a=13 + b=2", () => {
            const expectedObject = { result: 15 }
            
            const req = { query: { a: 13, b: 2 } }
            
            const result = handleSum(req, res)
            expect(result).toEqual(expectedObject)
        })
    
        it("should get { result: -5 } when summing a=10 + b=(-15)", () => {
            const expectedResponse = { result: -5 }
            
            const req = { query: { a: 10, b: -15 } }

            const result = handleSum(req, res)
            expect(result).toEqual(expectedResponse)
        })
    
        it('should return { msg: "...", errors: [{ ...props }, { ...props }]} when not passed enough arguments', () => {
    
            const result = handleSum({ query: { a: 13 } }, res)
            expect(result).toHaveProperty('msg')
            expect(result).toHaveProperty('errors')
            
            const result2 = handleSum({ query: { b: 25 } }, res)
            expect(result2).toHaveProperty('msg')
            expect(result2).toHaveProperty('errors')
        })
    
        it('should return { msg: "...", errors: [{ ...props }, { ...props }]} when passed arguments of invalid type', () => {
    
            const result = handleSum({ query: { a: "I am not a number", b: "Me neither" } }, res)
            expect(result).toHaveProperty('msg')
            expect(result).toHaveProperty('errors')
        })
    })

    describe("Mult", () => {
        it("should get { result: 10 } when multiplying a=5 * b=2", () => {
            const expectedObject = { result: 10 }
            
            const req = { query: { a: 5, b: 2 } }
            
            const result = handleMult(req, res)
            expect(result).toEqual(expectedObject)
        })
    
        it("should get { result: -15 } when multiplying a=(-3) * b=5", () => {
            const expectedResponse = { result: -15 }
            
            const req = { query: { a: -3, b: 5 } }

            const result = handleMult(req, res)
            expect(result).toEqual(expectedResponse)
        })
    
        it('should return { msg: "...", errors: [{ ...props }, { ...props }]} when passed arguments of invalid type', () => {
    
            const result = handleMult({ query: { a: "I am not a number", b: "Me neither" } }, res)
            expect(result).toHaveProperty('msg')
            expect(result).toHaveProperty('errors')
        })
    })

    describe("Sub", () => {
        it("should get { result: 11 } when substracting a=20 - b=9", () => {
            const expectedObject = { result: 11 }
            
            const req = { query: { a: 20, b: 9 } }
            
            const result = handleSub(req, res)
            expect(result).toEqual(expectedObject)
        })
    
        it("should get { result: -5 } when substracting a=10 - b=15", () => {
            const expectedResponse = { result: -5 }
            
            const req = { query: { a: 10, b: 15 } }

            const result = handleSub(req, res)
            expect(result).toEqual(expectedResponse)
        })
    
        it('should return { msg: "...", errors: [{ ...props }, { ...props }]} when passed arguments of invalid type', () => {
    
            const result = handleSum({ query: { a: "I am not a number", b: "Me neither" } }, res)
            expect(result).toHaveProperty('msg')
            expect(result).toHaveProperty('errors')
        })
    })

    describe("Div", () => {
        it('should get { result: 3 } when dividing a=6 / b=2', () => {
            const expectedObject = { result: 3 }
            
            const req = { query: { a: 6, b: 2 } }
            
            const result = handleDiv(req, res)
            expect(result).toEqual(expectedObject)
        })
    
        it('should get { result: -6 } when multiplying a=(-3) + b=5', () => {
            const expectedResponse = { result: -6 }
            
            const req = { query: { a: -30, b: 5 } }

            const result = handleDiv(req, res)
            expect(result).toEqual(expectedResponse)
        })
    
        it('should get "zeroDivisionError" error when dividing by zero', () => {
            const expectedErrorType = "zeroDivisionError"

            const req = { query: { a: 50, b: 0 } };
            
            const result = handleDiv(req, res)
            expect(result).toHaveProperty('errors')

            expect(result.errors[0].type).toBe(expectedErrorType)
        })

        it('should return { msg: "...", errors: [{ ...props }, { ...props }]} when passed arguments of invalid type', () => {
            const result = handleMult({ query: { a: "I am not a number", b: "Me neither" } }, res)
            expect(result).toHaveProperty('msg')
            expect(result).toHaveProperty('errors')
        })
    })

})