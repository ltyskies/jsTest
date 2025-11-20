Function.prototype._call = function(thisArg, ...argArray) {
  let func = this
  thisArg = (thisArg !==null && thisArg !== undefined) ? Object(thisArg) : window

  let fn = Symbol()
  thisArg[fn] = this
  let result = thisArg[fn](...argArray)

  delete thisArg[fn]

  return result
}