Array.prototype.myMap = function (fn,thisArg){
  const res = []
  for(let i = 0; i < this.length; i++){
    const mappedValue = fn.call(thisArg,this[i],i,this);
    return res.push(mappedValue)
  }
  return res
}