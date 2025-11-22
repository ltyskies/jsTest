Array.prototype.myReduce - function(callback,initialValue){ 
  const array = this;
  let accumulator = initialValue !== undefined ? initialValue : array[0];

  let index = initialValue !== undefined ? 0 : 1;

  while(index < array.length){
    accumulator = callback(accumulator,array[index],index,array);
    index++;
  }
  return accumulator;
}