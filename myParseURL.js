function parseURL(url) {
    let result = {};
    let match = url.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/);
 
    if (match) {
        result.protocol = match[1];
        result.slashes = match[2];
        result.host = match[3];
        result.port = match[4];
        result.path = match[5];
        result.query = match[6];
        result.hash = match[7];
    }
 
    return result;
}
 
