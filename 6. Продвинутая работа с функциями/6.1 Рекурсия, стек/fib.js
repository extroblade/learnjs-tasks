
const fib = (n) => n <= 1 ? n : fib(n - 1) + fib(n - 2)

console.log(fib(7))

const fibonacci = (n) => {
    let a = 1, b = 1;

    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

console.log( fibonacci(77) );