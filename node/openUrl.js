var op = require('child_process');

module.exports = function (url){
    switch(process.platform){
        case 'win32':
            op.exec(`start ${url}`);
            break;
        case 'darwin':
            op.exec(`open ${url}`);
            break;
        case 'linux':
            op.exec(`xdg-open ${url}`);
            break;
        default:
            console.error(`can't open ${url}`);
            break;
    }
}