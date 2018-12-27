
const networkInterfaces = require('os').networkInterfaces();

module.exports = function(){
    for(let devName in networkInterfaces){
        let iface = networkInterfaces[devName];
        for(let i = 0; i < iface.length; i++){
            let alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
    return '127.0.0.1';
}