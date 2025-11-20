Function.prototype._apply = function(thisArg,argArray){
  let fn = this
  thisArg = (thisArg !==null && thisArg !== undefined) ? Object(thisArg) : window

  argArray = argArray || []

  thisArg.fn = fn

  let result = thisArg.fn(...argArray)
  delete thisArg.fn

  return result
}