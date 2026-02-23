const ob = {
    'a.b.c': 1,
    'a.b.d': 2,
    'a.e': 3
}

function buildTreeFromObject(obj){
    const result = {}
    for(let key in obj){
        const keys = key.split('.')
        let current = result
        for(let i = 0;i<keys.length;i++){
            if(i === keys.length -1 ){
                current[keys[i]] = obj[key]
            }else{
                if(!current[keys[i]]){
                    current[keys[i]] = {}
                }
                current = current[keys[i]]
            }
        }
    return result
    }
}

console.log(buildTreeFromObject(ob))