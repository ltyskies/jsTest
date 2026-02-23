function parseParam(url){
    const paramsStr = url.split('?')[1]
    const paramsArr = paramsStr.split('&')
    const paramsObj = {}

    paramsArr.forEach(param => {
        if(param.includes('=')){
            let [key, val] = param.split('=')
            val = decodeURLComponent(val)
            if(paramsObj[key]){
                paramsObj[key]=[].concat(paramsObj[key],val)
            }else{
                paramsObj[key] = val
            }
        }else{
            paramsObj[param] = true
        }
    })
    return paramsObj
}