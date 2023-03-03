const sumToUs = (n) => {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}


const sumToRec = (n) => (n===1) ? 1 : n + sumToRec(n - 1);


const sumToAlg = (n) =>  n * (n + 1) / 2

  

console.log(sumToUs(100));
console.log(sumToRec(100));
console.log(sumToAlg(100));
