Array.prototype.myJoin = function(s = ','){
  let result = ''
  for(let i = 0;i < this.length;i++){
    result += this[i]
    str += s
  }
  return result
}