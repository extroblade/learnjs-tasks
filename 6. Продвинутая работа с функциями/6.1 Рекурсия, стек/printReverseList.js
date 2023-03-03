let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 1231,
                    next: false,
                }
            }
        }
    }   
};


const printReverseListRec = (list) => {

    list.next && printReverseListRec(list.next)
  
    console.log(list.value)

}


const printReverseListUs = (list) => {
    let arr = [];
    let temp = list;
  
    while (temp) {
        arr.push(temp.value);
        temp = temp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}


console.log(printReverseListRec(list)+"\n")
console.log(printReverseListUs(list))
