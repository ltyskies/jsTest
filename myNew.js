function myNew(){

    let obj = {};

    let con = [].shift.call(arguments);

    obj.__proto__ = con.prototype;
 
    let result = con.apply(obj, arguments)

    return result instanceof Object ? result:obj;
}

function Car(name,price){
  this.name = name;
  this.price = price;
}

Car.prototype.run = function() {
  console.log('run')
}

let test = myNew(Car,'Benz',100)
console.log(test)

let obj = new Car('Benz',100)
console.log(obj)