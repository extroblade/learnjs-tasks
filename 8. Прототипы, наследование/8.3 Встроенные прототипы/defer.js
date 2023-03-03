Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}
  
function f() {
    console.log("1");
}
  
f.defer(1000);