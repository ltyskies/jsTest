Function.prototype._call = function(thisArg, ...argArray) {
  let func = this
  thisArg = (thisArg !==null && thisArg !== undefined) ? Object(thisArg) : window

  let fn = Symbol()
  thisArg[fn] = this
  let result = thisArg[fn](...argArray)

  delete thisArg[fn]

  return result
}

const person = {
    name: "sky"
};

function sayName() {
    console.log("大家好，我是 " + this.name);
}

sayName.call(person); 

sayName._call(person); 
