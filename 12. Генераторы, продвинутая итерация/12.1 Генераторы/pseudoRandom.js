function* pseudoRandom(seed) {
    let prev = seed;
  
    while(true) {
        let next = prev * 16807 % 2147483647;
        prev = next;
        yield next;
    }
  
};
  
let gen = pseudoRandom(1);
console.log(gen);

console.log(gen.next().value);
console.log(gen.next().value)
console.log(gen.next().value);