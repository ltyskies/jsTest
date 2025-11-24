function myRace(promises){
  return new Promise((resolve,reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(res => {
        resolve(res)
      },err => {
        reject(err)
      })
    })
  })
}