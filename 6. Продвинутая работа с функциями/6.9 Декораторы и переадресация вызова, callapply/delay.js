function delay(f, ms) {
    return function() {
        setTimeout(() => f.apply(this, arguments), ms)
    }
}
  
let f10000 = delay(console.log, 10000);

f10000("test"); 