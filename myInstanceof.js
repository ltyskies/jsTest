function myInstanceof(obj,class_name) {
  let proto = Object.getPrototypeOf(obj)
  let prototype = class_name.prototype
  while(true) {
    if(proto == null) return false
    if(proto == prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}


function A () {
  this.name = 'A'
}

function B () {
  this.name = 'B'
}

let a = new A()


B.prototype = a
a.constructor = B

let b = new B()

console.log(myInstanceof(a,A)) 
console.log(myInstanceof(a,B)) 
console.log(myInstanceof(b,A)) 
console.log(myInstanceof(b,a)) 


