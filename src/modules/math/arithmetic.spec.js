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
})