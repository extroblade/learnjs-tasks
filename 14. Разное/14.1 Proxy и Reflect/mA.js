let array = [1, 2, 3, 4, 5]

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (prop < 0) {
            prop = target.length + +prop
        }
        return Reflect.get(target, prop, receiver)
    }
})


console.log(array[-1])
