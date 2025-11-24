function myAll(promises){
  return new Promise((resolve,reject) => { 
    result = []
    let counter = 0
    for(let i = 0; i < promises.length; i++){
      Promise.resolve(promises[i]).then(res => { 
        result[i] = res
        counter++
        if(counter === promises.length){
          resolve(result)
        }
      },err => {
        reject(err)
      }
    )
    }
  })
}