//process.nextTick()将代码添加到tick队列中

//tick队列在调用栈和微任务队列之间，也就是说它在微任务队列之前执行
setTimeout(() => {
  console.log(1);
});
queueMicrotask(function () {
  console.log(2);
});

process.nextTick(function () {
  console.log(3);
});
console.log(4);
