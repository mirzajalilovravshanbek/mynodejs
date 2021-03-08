const path = require('path');
// console.log(__filename);
const pathObj = path.parse(__filename);
const pathBase = path.basename('F:/nodeJs/firstproject/index.js', '.js');
const pathJoin = path.join('F:/', 'sss', 'firstproject');
const pathNormalize = path.normalize('C:\\temp\\\\foo\\///\bar\\..\\');
const pathDir = path.dirname('F:/nodeJs/firstproject/index.js');
const pathExt = path.extname('index.php');
const pathFor = path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
});
const pathAbs = path.isAbsolute('/firstproject/index.js');


console.log(pathAbs);