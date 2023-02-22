const readNumber = () => {
    let num;
  
    do {
        num = prompt("Введите число", 0); 
    } while (!num || !isFinite(num) );
  
    return +num;
}