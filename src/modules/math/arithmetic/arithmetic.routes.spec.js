const { handleSum } = require("./arithmetic.routes")

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
    
            const result3 = handleSum({ query: { a: "I am not a number", b: "Me neither" } }, res)
            expect(result3).toHaveProperty('msg')
            expect(result3).toHaveProperty('errors')
        })
    })

})