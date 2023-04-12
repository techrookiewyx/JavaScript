//使用import来导入自定义模块，不能省略扩展名


//这种方法虽然没问题但没用 模块虽然导入，但内容没有拿到
//import "./ES-module-export.js"


//ES中导入时的名字必须跟导出的一致
//import { a, b, h } from "./ES-module-export.js"


//可以通过as来取别名
import { a, b, obj as h } from "./ES-module-export.js"
console.log(a, b, h);


//导入模块默认导出的内容，可以任意命名
import sum from "./ES-module-export.js"
console.log(sum);