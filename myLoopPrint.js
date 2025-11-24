let print = function(time,i){
  return new Promise(function (resolve, reject){
    setTimeout(function(){
      resolve(i)
    },time)
  }
)}

let start = async function(){
  for(let i = 0; i < 5; i++){
    let res = await print(1000,i)
    console.log(res)
  }
}

start()