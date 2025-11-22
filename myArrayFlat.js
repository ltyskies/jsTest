function recursiveFlatten(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(recursiveFlatten(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

Array.prototype.myFlat = function() {
    return recursiveFlatten(this); 
}