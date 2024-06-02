class PasswordValidator {
    check (password) {
        const errors = []
        const hasAtLeastOneDigit = /.*[0-9].*/.test(password)
        const hasAtLeastOneUppercaseCharacter = /.*[A-Z].*/.test(password)

        if (password.length < 5) {
            errors.push('password too short')
        }

        if (password.length > 15) {
            errors.push('password too long')
        }
        
        const result = password.length >= 5 && password.length <= 15 && hasAtLeastOneDigit && hasAtLeastOneUppercaseCharacter
        return {
            result,
            errors,
        }
    }
}

module.exports = {
    PasswordValidator,
}