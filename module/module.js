/*模块的分类
-核心模块
-文件模块
    -后缀名为.js文件
    -后缀名为.json文件
    -后缀名为.node文件
-第三方模块
*/
var p  = require('./person');
var json  = require('./json');

var fs = require('js');
var resul= fs.readFileSync('json.json','utf-8');
var json = JSON.parse(resul);

console.trace();