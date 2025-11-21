function compare(a, b){
  if(typeof a !== typeof b){
    return false
  }

  if(typeof a != 'object' && typeof a === typeof b){
    return a === b
  }
  if((!a instanceof Array && b instanceof Array) || (a instanceof Array && !b instanceof Array)){
    return false
  }else if(a instanceof Array && b instanceof Array){ 
    if(a.length != b.length){
      return false
    }else {
      for(let i = 0; i < a.length; i++){ 
        if(!compare(a[i], b[i])){
          return false
        }
      }
    }
  }else {
    if(Object.keys(a).length != Object.keys(b).length){
      return false
    }else{
      for(let key in a){ 
        if(!(key in b) || !compare(a[key], b[key])){
          return false
        }
      }
    }
  }
  return true
}