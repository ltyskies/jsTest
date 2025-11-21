Object.myCreate = function(proto,defineProperties){
  if((typeof proto === 'object' && proto !== null)|| typeof proto === 'function'){
    let obj = {};

    Object.setPrototypeOf(obj,proto);
    Object.defineProperties(obj,defineProperties);
    return obj;
  }else {
    throw new TypeError('Object prototype may only be an Object or null');
  }
}