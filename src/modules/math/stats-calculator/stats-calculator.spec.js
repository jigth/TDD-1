const { StatsCalculator } = require('./stats-calculator')

describe('Stats calculator', () => {

    describe('getMinValue', () => {
        it('gets 0 from the list [5, 1, 2, 3, 0]', () => {
            let list = [5, 1, 2, 3, 0]
            expect(StatsCalculator.getMinValue(list)).toBe(0)
        })

        it('gets 4 from the list [28, 90, 13, 4]', () => {
            let list = [28, 90, 13, 4]
            expect(StatsCalculator.getMinValue(list)).toBe(4)
        })

        it('gets -15 from the list [28, 90, 13, 4, 0, 1, -15]', () => {
            let list = [28, 90, 13, 4, 0, 1, -15]
            expect(StatsCalculator.getMinValue(list)).toBe(-15)
        })

        it('gets 151515 from the list [151515]', () => {
            let list = [151515]
            expect(StatsCalculator.getMinValue(list)).toBe(151515)
        })
    })

    describe('getMaxValue', () => {
        it('gets 500 from the list [500, 3, 1, 2]', () => {
            const list = [500, 3, 1, 2]
            expect(StatsCalculator.getMaxValue(list)).toBe(500)
        })

        it('gets 0 from the list [-5, -10, 0, -5, -1, 0]', () => {
            const list = [-5, -10, 0, -5, -1, 0]
            expect(StatsCalculator.getMaxValue(list)).toBe(0)
        })

        it('gets -5 from the list [-5, -6, -7, -15, -21, -10]', () => {
            const list = [-5, -6, -7, -15, -21, -10]
            expect(StatsCalculator.getMaxValue(list)).toBe(-5)
        })

        it('gets -99 from the list [-99]', () => {
            const list = [-99]
            expect(StatsCalculator.getMaxValue(list)).toBe(-99)
        })
    })

    describe('getCount', () => {
        it('Gets 5 from the list [1, 2, 3, 4, 5]', () => {
            const list = [1, 2, 3, 4, 5]
            expect(StatsCalculator.getCount(list)).toBe(5)
        })

        it('Gets 2 from the list [55, 40]', () => {
            const list = [55, 40]
            expect(StatsCalculator.getCount(list)).toBe(2)
        })

        it('Gets 0 from the list []', () => {
            const list = []
            expect(StatsCalculator.getCount(list)).toBe(0)
        })
    })

    describe('getAverageValue', () => {
        it('Gets 8 from the list [6, 10, 8, 8, 8]', () => {
            const list = [6, 10, 8, 8, 8]
            expect(StatsCalculator.getAverageValue(list)).toBe(8)
        })

        it('Gets 4.5 from the list [4, 5]', () => {
            const list = [4, 5]
            expect(StatsCalculator.getAverageValue(list)).toBe(4.5)
        })

        it('Gets 3.2 from the list [5, 2, 6, 1, 2]', () => {
            const list = [5, 2, 6, 1, 2]
            expect(StatsCalculator.getAverageValue(list)).toBe(3.2)
        })
    })

})