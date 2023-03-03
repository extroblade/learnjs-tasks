function makeCounter() {
    let count = 0;
  
    function counter() {
        return count
    }

    counter.increase = () => count++
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
}

let counter = makeCounter()

console.log(counter())
counter.increase()

console.log(counter())
counter.set(5)

console.log(counter())
counter.decrease()

console.log(counter())
