//document.write("哈哈-外部引入");

//使用require（“path”）函数来引入模块，返回一个对象
let req = require("./commonjs-require");
console.log(req);

//引入核心模块
let path = require("path");
console.log(path);