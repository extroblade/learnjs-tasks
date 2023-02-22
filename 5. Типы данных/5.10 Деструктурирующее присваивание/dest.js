let user = {
    name: "John",
    years: 30
};
  
let {name, years: age, isAdmin = false, isUser = true} = user;

console.log( name ); // John
console.log( age ); // 30
console.log( isAdmin ); // false
console.log( isUser ); // true
