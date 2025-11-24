function myDebounce(func,delay){
  let timer = null
  return function(...args){
    if(!timer){
      timer = setTimeout(()=>{
        func.call(this,...args)
        timer = null
      },delay)
    }
  }
}