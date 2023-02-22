const groupById = (arr) => {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let users = [
    {id: '2', name: "John Smith", age: 20},
    {id: '3', name: "Ann Smith", age: 24},
    {id: '1', name: "Pete Peterson", age: 31},
  ];
  
console.log(groupById(users))