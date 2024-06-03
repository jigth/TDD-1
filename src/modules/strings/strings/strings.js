class Strings {
    static isPalyndrome (str) {
        const normalWord = str.toLowerCase().replaceAll(' ', '');
        
        const reversedWord = str.split('').reverse().join('').
            toLowerCase().replaceAll(' ', '');

        return normalWord === reversedWord
    }
}

module.exports = {
    Strings,
}