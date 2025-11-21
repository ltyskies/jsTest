function deepCopy(obj){
  let newObj = null;

  if(typeof (obj) == 'object' && obj !== null){
    newObj = obj instanceof Array ? [] : {}; 
    for(let key in obj){
      new obj[key] = deepCopy(obj[key]);
    }
  }else {
    newObj = obj;
  }
  return newObj;
}