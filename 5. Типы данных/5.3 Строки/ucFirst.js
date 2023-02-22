const ucFirst = (str) => {
    return str ?  str[0].toUpperCase() + str.slice(1) : 'Not a string'
}
console.log(ucFirst(''))