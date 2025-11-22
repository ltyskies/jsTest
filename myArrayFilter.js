Array.prototype.myFilter = function(fn,thisArg) {
  if(typeof fn !== 'function'){
    throw new TypeError(fn + 'is not a function')
  }
  const filteredArray = []
  const thisContext = thisArg || globalThis

  for(let i = 0;i < this.length;i++){
    if(fn.call(thisContext,this[i],i,this)){
      filteredArray.push(this[i])
    }
  }
  return filteredArray
}