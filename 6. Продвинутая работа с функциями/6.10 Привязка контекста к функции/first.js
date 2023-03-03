'use strict'

function f() {
    console.log( this ); // null with strict
}
  

let user = {
    g: f.bind(null) 
};
  

user.g();