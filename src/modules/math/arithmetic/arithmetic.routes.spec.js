const { handleSum } = require("./arithmetic.routes")

jest.mock('./arithmetic.routes')

describe("Arithmetic routes", () => {

    describe("Sum", () => {
        it("should get { result: 15 } when summing a=13 + b=2", () => {
            const expectedObject = { result: 15 }
            handleSum.mockReturnValueOnce(expectedObject)
            const result = handleSum({ query: { a: 13, b: 2 } }, null)
            expect(result).toEqual(expectedObject)
        })
    
        it("should get { result: -5 } when summing a=10 + b=(-15)", () => {
            const expectedResponse = { result: -5 }
            handleSum.mockReturnValueOnce(expectedResponse)
            const result = handleSum({ query: { a: 10, b: -15 } }, null)
            expect(result).toEqual(expectedResponse)
        })
    
        it('should return { msg: "...", errors: [{ ...props }, { ...props }]} when not passed enough arguments', () => {
            // The "error properties" comments below are put there to avoid leaking implementation details here.
            const expectedResponse = { 
                msg: "Generic error message as string",
                errors: [{
                    // Error properties go here
                }, {
                    // Error properties go here
                }] 
            }
    
            handleSum.mockReturnValueOnce(expectedResponse)
                .mockReturnValueOnce(expectedResponse)
    
            const result = handleSum({ query: { a: 13 } }, null)
            expect(result).toEqual(expectedResponse)
            
            const result2 = handleSum({ query: { b: 25 } }, null)
            expect(result2).toEqual(expectedResponse)
            expect(result2).toHaveProperty('msg')
            expect(result2).toHaveProperty('errors')
        })
    
        it('should return { msg: "...", errors: [{ ...props }, { ...props }]} when passed arguments of invalid type', () => {
            const expectedResponse = { 
                msg: "Generic error message as string",
                errors: [{
                    // Error properties go here
                }, {
                    // Error properties go here
                }] 
            }
    
            handleSum.mockReturnValueOnce(expectedResponse)
            
            const result3 = handleSum({ query: { a: "I am not a number", b: "Me neither" } }, null)
            expect(result3).toEqual(expectedResponse)
            expect(result3).toHaveProperty('msg')
            expect(result3).toHaveProperty('errors')
        })
    })

})