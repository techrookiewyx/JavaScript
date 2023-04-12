//可以通过解构赋值 引入模块中对象的某个属性值
const { c } = require("./commonjs-require")
console.log(c);

//可以通过require().属性名的方式来引入
const d = require("./commonjs-require").d;
console.log(d);