const { Strings } = require('./strings')
describe('Strings', () => {
    let strings
    
    beforeEach(() => {
        strings = new Strings()
    })

    it('test if "mom" is a palyndrome', () => {
        expect(strings.isPalyndrome('mom')).toBeTruthy()
    })

    it('test if "osossoso" is a palyndrome', () => {
        expect(strings.isPalyndrome('osossoso')).toBeTruthy()
    })

    it('test if "Daniel" is a palyndrome', () => {
        expect(strings.isPalyndrome('Daniel')).toBeFalsy()
    })
})