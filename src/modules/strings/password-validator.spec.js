const { PasswordValidator } = require('./password-validator')

describe('Password Validator', () => {

    let passwordValidator

    beforeEach(() => {
        passwordValidator = new PasswordValidator()
    })

    it('approves the password "pasS123" as it has 5 characters or more', () => {
        const password = "pasS123"
        expect(passwordValidator.check(password)).toBeTruthy()
    })
    
    it('rejects the password "ok3i" as it has less than 5 characters', () => {
        const password = "ok3i"
        expect(passwordValidator.check(password).result).toBeFalsy()
    })

    it('approves the password "C0mpl3xPwd15#" as it has 15 characters or less', () => {
        const password = "C0mpl3xPwd15#"
        expect(passwordValidator.check(password).result).toBeTruthy()
    })

    it('rejects the password "C0mpl3xPwd15#TooLarge" as it has more than 15 characters', () => {
        const password = "C0mpl3xPwd15#TooLarge"
        expect(passwordValidator.check(password).result).toBeFalsy()
    })

    it('approves the password "ok3y Dokey" as it has at least one digit', () => {
        const password = "ok3y Dokey"
        expect(passwordValidator.check(password)).toBeTruthy()
    })

    it('rejects the password "okey dokey" as it has NOT any digit', () => {
        const password = "okey dokey"
        expect(passwordValidator.check(password).result).toBeFalsy()
    })

    it('approves the password "Well Done 3" as it has at least one uppercase letter', () => {
        const password = "Well Done 3"
        expect(passwordValidator.check(password).result).toBeTruthy()
    })

    it('rejects the password "well done 3" as it has NOT at least one uppercase letter', () => {
        const password = "well done 3"
        expect(passwordValidator.check(password).result).toBeFalsy()
    })

    it('returns an object with a boolean "result" key', () => {
        const password = "generIc p4d"
        const checkResult = passwordValidator.check(password)
        expect(typeof checkResult).toBe('object')
        expect(checkResult).toHaveProperty('result')
    })

    it('returns an object with an array "errors" key', () => {
        const checkResult = passwordValidator.check("generIc p4d")
        expect(typeof checkResult).toBe('object')
        expect(checkResult).toHaveProperty('errors')
    })

    it('shows "password too short" error when it has less than 5 characters', () => {
        const validation = passwordValidator.check("ok3i")
        expect(validation.errors[0]).toMatch(/.*password too short.*/)
    })

    it('shows "password too long" error when it has more than 15 characters', () => {
        const validation = passwordValidator.check("ok3iSuperHyperLongPwd")
        expect(validation.errors[0]).toMatch(/.*password too long.*/)
    })

    it('shows "password should have at least 1 digit" error for password "OkeyPass', () => {
        const validation = passwordValidator.check("OkeyPass")
        expect(validation.errors[0]).toMatch(/.*password should have at least 1 digit.*/)
    })

    it('shows "password should have at least 1 uppercase character" error for password "okeypass', () => {
        const validation = passwordValidator.check("okeypass")
        expect(validation.errors).toContain("password should have at least 1 uppercase character")
    })

    it('shows multiple error messages for password "wrongpasswd"', () => {
        const validation = passwordValidator.check("wrongpasswd")
        expect(validation.errors.length).toBeGreaterThan(1)
    })
})