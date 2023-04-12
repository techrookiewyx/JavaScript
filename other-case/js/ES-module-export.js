//ES模块化中 使用exprot导出

export let a = 10
export let b = 20
export let obj = { name: "孙悟空" }

console.log("aaa");

//default设置默认导出，其后边必须是一个值，一个模块值只能有一个默认导出
export default function sum(a,b) { 
  return a + b;
}