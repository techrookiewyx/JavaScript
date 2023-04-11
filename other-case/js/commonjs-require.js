console.log("aaa");
//可以通过exports来设置要向外部暴露的内容，exprots只能一个一个值向外暴露
//exports.a = "唐僧";
//exports.b = "孙悟空";
//let a = 10;
//exports.b = a;
//通过module.exprots可暴露多个值

module.exports = {
  c: "哈哈",
  d: [1, 2, 7, 6],
  e: function () {
    console.log("aaab");
  },
}
