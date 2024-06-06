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

    static fact (n) {
        if (n === 1 | n === 0) return 1
        return n * this.fact(n-1)
    }

    static fib (n) {
        if (n === 0 | n === 1) return n
        return this.fib(n - 1) + this.fib(n - 2)
    }
}


module.exports = {
    Arithmetic
}