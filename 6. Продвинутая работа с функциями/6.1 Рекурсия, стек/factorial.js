const factorial = (n) => n ? n * factorial(n - 1) : 1


for (let i=1; i<8; i++){
    console.log(factorial(i))
}
