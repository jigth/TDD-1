const { Strings } = require('./strings')
describe('Strings', () => {
    it('test if "mom" is a palyndrome', () => {
        const strings = new Strings()
        expect(strings.isPalyndrome('mom')).toBeTruthy()
    })

    it('test if "osossoso" is a palyndrome', () => {
        const strings = new Strings()
        expect(strings.isPalyndrome('osossoso')).toBeTruthy()
    })

    it('test if "Daniel" is a palyndrome', () => {
        const strings = new Strings()
        expect(strings.isPalyndrome('Daniel')).toBeFalsy()
    })
})