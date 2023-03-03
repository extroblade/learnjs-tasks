function sum(a){
    sum.count += a;
    return sum;
}

sum.count = 0;

sum.toString = function(){
    let count = sum.count;
    sum.count = 0;
    return count;
}

console.log(sum(0)(1)(2)(3)(4)(5).count === 0+1+2+3+4+5)