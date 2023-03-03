Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};
  

function f(a, b) {
    console.log( a + b );
}

f.defer(10000)(1, 10); 