class Arithmetic {
    sum (a, b) {
        return a + b;
    }
    
    mult (a, b) {
        return a * b
    }

    sub (a, b) {
        return a - b
    }

    div (a, b) {
        return a / b
    }

    fact (n) {
        if (n == 1 | n == 0) return 1
        return n * this.fact(n-1)
    }

    fib (n) {
        if (n == 1 | n == 0) return 1
        return this.fib(n - 1) + this.fib(n - 2)
    }
}


module.exports = {
    Arithmetic
}