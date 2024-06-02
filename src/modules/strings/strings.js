class Strings {
    isPalyndrome (str) {
        return str === str.split('').reverse().join('')
    }
}

module.exports = {
    Strings,
}