function unique(arr){
  const set = new Set();
  for(let i of arr){
    set.add(i);
  }
  return [...set];
}
