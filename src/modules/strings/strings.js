class Strings {
    isPalyndrome (str) {
        return str.toLowerCase().replaceAll(' ', '') === str.split('').reverse()
                .join('').toLowerCase().replaceAll(' ', '')
    }
}

module.exports = {
    Strings,
}