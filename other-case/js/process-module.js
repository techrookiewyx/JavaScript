//node中的全局对象是global，其作用类似于window。
//ES标准下，无论是服务器还是浏览器全局对象的标准名应该是globalThis

console.log(global);
console.log(globalThis);
console.log(global===globalThis);

//process是一个对象表示当前node进程，通过该对象可以获取进程的信息，或者对进程做各种操作。
//process是node中的全局变量可以直接使用

console.log(process);