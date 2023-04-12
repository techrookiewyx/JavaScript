const path = require("path");


//path.resolve(paths)该方法用来生成一个绝对路径

//当不传递参数时
const res = path.resolve();
console.log(res); // E:\Learn-road\JS

//控制台通过node命令执行时   E:\Learn-road\JS\other-case\js


//通常第一个参数为绝对路径，第二个参数为相对路径
const res1 = path.resolve("E:\\Learn-road\\JS\\other-case\\js", "./1.js");
console.log(res1); 


//上面属于硬编码 不推荐 下面是正确用法
const res2 = path.resolve(__dirname, "2.js"); // __dirname表示当前模块的绝对路径
console.log(res2);
