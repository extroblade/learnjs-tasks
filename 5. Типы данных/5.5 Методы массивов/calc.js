function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        operator = split[1],
        b = +split[2]
  
      if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[operator](a, b);
    }
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }