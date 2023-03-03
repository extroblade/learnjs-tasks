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


const printListRec = (list) => {

    console.log(list.value); // выводим текущий элемент

    list.next && printListRec(list.next)

}

const printListUs = (list) => {
    let temp = list;
  
    while (temp.value) {
        console.log(temp.value);
        temp = temp.next;
    }
  
}

printListUs(list)
console.log("\n")
printListRec(list)