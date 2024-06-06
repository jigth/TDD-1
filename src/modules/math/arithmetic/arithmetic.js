class Arithmetic {
    static sum (a, b) {
        return a + b;
    }
    
    static mult (a, b) {
        return a * b
    }

    static sub (a, b) {
        return a - b
    }

    static div (a, b) {
        return a / b
    }

    static recursiveFact (n) {
        if (n === 1 | n === 0) return 1
        return n * this.recursiveFact(n-1)
    }

    static iterativeFact (n) {
        if (n === 1 | n === 0) return 1

        let result = 1
        for (let i = 2; i <= n; i++) {
            result *= i
        }

        return result
    }

    static fact (n) {
        if (n > 170) {
            throw new Error('Cannot calculate factorial greater than 170 because of number precision limits in JavaScript')
        } else if (n < 0) {
            throw new Error('Cannot calculate factorial lower than 0 because of mathematic factorial definition')
        }

        if (n <= 60) {
            return this.recursiveFact(n)
        }

        return this.iterativeFact(n)
    }

    static recursiveFib(n) {
        if (n === 0 | n === 1) return n
        return this.recursiveFib(n - 1) + this.recursiveFib(n - 2)
    }

    static iterativeFib(n) {
        if (n === 0) return 0
        if (n === 1 || n === 2) return 1

        let result = 0
        let fibNMinusOne = 1
        let fibNMinusTwo = 1

        for (let i = 1; i <= (n - 2); i++) {
            result = fibNMinusOne + fibNMinusTwo
            fibNMinusTwo = fibNMinusOne
            fibNMinusOne = result
        }

        return result
    }

    static fib (n) {
        if (n > 1476) {
            throw new Error('Cannot calculate fibonacci greater than 1476 because of number precision limits in JavaScript')
        } else if (n < 0) {
            throw new Error('Cannot calculate fibonacci lower than 0 because of mathematic fibonacci definition')
        }

        if (n <= 35) {
            return this.recursiveFib(n)
        }

        return this.iterativeFib(n)
    }
}


module.exports = {
    Arithmetic
}