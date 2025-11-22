Array.prototype.myFill = function(value,state,end){
  if(!state || state !== 0){
    state = 0;
  }
  end = end || this.length;

  for(let i = state;i < end;i++){
    this[i] = value;
  }
  return this;
}