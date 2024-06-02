const { Arithmetic } = require('./arithmetic.js')

describe('Arithmetic', () => {
    let arithmetic

    beforeEach(() => {
        arithmetic = new Arithmetic()
    })

    describe('Sum', () => {
        it('sums 2+2 and get 4', () => {
            expect(arithmetic.sum(2, 2)).toBe(4)
        })

        it('sums 4+9 and get 13', () => {
            expect(arithmetic.sum(4, 9)).toBe(13)
        })

        it('sums 0+0 and get 0', () => {
            expect(arithmetic.sum(0, 0)).toBe(0)
        })

        it('sums 10+(-5) and get 5', () => {
            expect(arithmetic.sum(10, -5)).toBe(5)
        })
    })

    describe('Multiplication', () => {
        it('multiplies 2*5 and get 10', () => {
            expect(arithmetic.mult(2, 5)).toBe(10)
        })

        it('multiplies 5*2 and get 10', () => {
            expect(arithmetic.mult(5, 2)).toBe(10)
        })

        it('multiplies 7*5 and get 35', () => {
            expect(arithmetic.mult(7, 5)).toBe(35)
        })

        it('multiplies 20*0 and get 0', () => {
            expect(arithmetic.mult(20, 0)).toBe(0)
        })

        it('multiplies 20*(-1) and get -20', () => {
            expect(arithmetic.mult(20, -1)).toBe(-20)
        })

        it('multiplies (-20)*20 and get -400', () => {
            expect(arithmetic.mult(-20, 20)).toBe(-400)
        })

        it('multiplies (-20)*(-20) and get 400', () => {
            expect(arithmetic.mult(-20, -20)).toBe(400)
        })
    })

    describe('Substraction', () => {
        it('substracts 10-5 and gets 5', () => {
            expect(arithmetic.sub(10, 5)).toBe(5)
        })
        
        it('substracts 10-10 and gets 0', () => {
            expect(arithmetic.sub(10, 10)).toBe(0)
        })

        it('substracts 1000-10 and gets 990', () => {
            expect(arithmetic.sub(1000, 10)).toBe(990)
        })

        it('substracts 0-0 and gets 0', () => {
            expect(arithmetic.sub(0, 0)).toBe(0)
        })

        it('substracts 5-(-5) and gets 10', () => {
            expect(arithmetic.sub(5, -5)).toBe(10)
        })

        it('substracts -5-(-5) and gets 0', () => {
            expect(arithmetic.sub(-5, -5)).toBe(0)
        })
    })

    describe('Division', () => {
        it('divides 5/5 and gets 1', () => {
            expect(arithmetic.div(5, 5)).toBe(1)
        })

        it('divides 35/5 and gets 7', () => {
            expect(arithmetic.div(35, 5)).toBe(7)
        })

        it('divides 50000/5 and gets 10000', () => {
            expect(arithmetic.div(50000, 5)).toBe(10000)
        })

        it('divides 50000/-5 and gets -10000', () => {
            expect(arithmetic.div(50000, -5)).toBe(-10000)
        })

        it('divides -50000/10 and gets -5000', () => {
            expect(arithmetic.div(-50000, 10)).toBe(-5000)
        })

        it('divides -50000/-10 and gets 5000', () => {
            expect(arithmetic.div(-50000, -10)).toBe(5000)
        })
    })

    describe('Factorial', () => {
        it('calculates fact(5) and gets 120', () => {
            expect(arithmetic.fact(5)).toBe(120)
        })

        it('calculates fact(2) and gets 2', () => {
            expect(arithmetic.fact(2)).toBe(2)
        })

        it('calculates fact(0) and gets 1', () => {
            expect(arithmetic.fact(0)).toBe(1)
        })

        it('calculates fact(7) and gets 5040', () => {
            expect(arithmetic.fact(7)).toBe(5040)
        })

        // TODO: Add error test here, I didn't add it for now because of lack of internet connection.
    })
})