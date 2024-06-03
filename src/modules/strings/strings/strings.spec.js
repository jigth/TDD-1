const { Strings } = require('./strings')

describe('Strings', () => {
    it('test if "mom" is a palyndrome', () => {
        expect(Strings.isPalyndrome('mom')).toBeTruthy()
    })

    it('test if "osossoso" is a palyndrome', () => {
        expect(Strings.isPalyndrome('osossoso')).toBeTruthy()
    })

    it('test if "Daniel" is a palyndrome', () => {
        expect(Strings.isPalyndrome('Daniel')).toBeFalsy()
    })

    it('test if "Ana se sana" is a palyndrome', () => {
        expect(Strings.isPalyndrome('Ana se sana')).toBeTruthy()
    })
})