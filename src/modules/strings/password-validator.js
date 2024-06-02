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

        if (!hasAtLeastOneDigit) {
            errors.push('password should have at least 1 digit')
        }

        if (!hasAtLeastOneUppercaseCharacter) {
            errors.push('password should have at least 1 uppercase character')
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