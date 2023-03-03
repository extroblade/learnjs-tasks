

let animal = {
    eat() {
        this.full = true;
    }
};
  
let rabbit = { //full
    __proto__: animal
};
  
rabbit.eat();