function Object(obj) {
    this.obj = obj
}
  
let obj = new Object({'bcd': 3});
let obj2 = new obj.constructor({'asd': 2});
  
console.log( obj2.obj );