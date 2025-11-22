Array.prototype.myInclude = function(value) {
  for(let i = 0;i < this.length;i++){
    if(this[i] === value){
      return true
    }
  }
  return false
}