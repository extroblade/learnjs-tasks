function randomInteger(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

console.log(randomInteger(1,5))