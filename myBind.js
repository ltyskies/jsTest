const person = {
  firstName: 'l',
  lastName: 'sky',
  fullName: function() {
    return this.firstName + ' ' + this.lastName
  }
}

const person2 = {
  firstName: 'l2',
  lastName: 'sky',
  fullName: function() {
    return this.firstName + ' ' + this.lastName
  }
}

Function.prototype.myBind = function(context,...args) {
  let fn = this
  return function(...subArgs) {
    const allArgs = [...args,...subArgs]
    if(new.target){
      return new fn(this,allArgs)
    }else {
      return fn.call(context,allArgs)
    }
  }
}

console.log(person.fullName())
console.log(person.fullName.myBind(person2)())