let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
};
  
  console.log( rabbit.jumps ); // ? (1) //true from proto
  
  delete rabbit.jumps;
  
  console.log( rabbit.jumps ); // ? (2) // null from animal
  
  delete animal.jumps;
  
  console.log( rabbit.jumps ); // ? (3) // undef