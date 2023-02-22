const sumInput = () => {

    let numbers = [];
  
    while (true) {
    
        let value = prompt("Введите число", 0);

        if (value === "" || value === null || !isFinite(value)) break;
    
        numbers.push(+value);
    }
  
    let sum = numbers.reduce((a,b) => a+b)

    return sum;
}