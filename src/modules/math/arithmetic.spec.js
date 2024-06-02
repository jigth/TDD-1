const { sum, mult } = require('./arithmetic.js')

describe('Arithmetic', () => {
    describe('Sum', () => {
        it('sums 2+2 and get 4', () => {
            expect(sum(2, 2)).toBe(4)
        })

        it('sums 4+9 and get 13', () => {
            expect(sum(4, 9)).toBe(13)
        })

        it('sums 0+0 and get 0', () => {
            expect(sum(0, 0)).toBe(0)
        })

        it('sums 10+(-5) and get 5', () => {
            expect(sum(10, -5)).toBe(5)
        })
    })

    describe('Multiplication', () => {
        it('multiplies 2*5 and get 10', () => {
            expect(mult(2, 5)).toBe(10)
        })

        it('multiplies 5*2 and get 10', () => {
            expect(mult(5, 2)).toBe(10)
        })

        it('multiplies 7*5 and get 35', () => {
            expect(mult(7, 5)).toBe(35)
        })

        it('multiplies 20*0 and get 0', () => {
            expect(mult(20, 0)).toBe(0)
        })

        it('multiplies 20*(-1) and get -20', () => {
            expect(mult(20, -1)).toBe(-20)
        })

        it('multiplies (-20)*20 and get -400', () => {
            expect(mult(-20, 20)).toBe(-400)
        })

        it('multiplies (-20)*(-20) and get 400', () => {
            expect(mult(-20, -20)).toBe(400)
        })
    })
})