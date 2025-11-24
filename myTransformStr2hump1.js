function myTransformStr2hump(str) {
  if(str == null){
    return ""; 
  }
  let srtArr = str.split('-')
  for(let i = 1; i < srtArr.length; i++){
    srtArr[i] = srtArr[i].charAt(0).toUpperCase() + strArr[i].substring(1)
  }
  return srtArr.join('')
}