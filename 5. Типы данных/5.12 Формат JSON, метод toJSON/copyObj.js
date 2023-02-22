let user = {
    name: "Василий Иванович",
    age: 35
  };
  
let nuser = JSON.parse(JSON.stringify(user));
nuser.age =  22
console.log(nuser)
console.log(user)
