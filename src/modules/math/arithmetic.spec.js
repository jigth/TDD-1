const { sum } = require('./arithmetic.js')

describe('Arithmetic', () => {
    describe('Sum', () => {
        it('Sums 2+2 and returns 4', () => {
            expect(sum(2, 2)).toBe(4)
        })

        it('Sums 4+9 and returns 13', () => {
            expect(sum(4, 9)).toBe(13)
        })

        it('Sums 0+0 and returns 0', () => {
            expect(sum(0, 0)).toBe(0)
        })

        it('Sums 10+(-5) and returns 5', () => {
            expect(sum(10, -5)).toBe(5)
        })
    })
})