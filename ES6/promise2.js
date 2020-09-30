// 创建成功的promise对象1
p1 = Promise.resolve("成功的对象");

// 方式2.等价的
var p2 = new Promise((res, rej)=>{
    res("这是成功的对象2")
})
console.log(p1);
p1.then((result) => {
    console.log(result);
}).catch((err) => {
    
});

// 创建拒绝的promise对象1
p1 = Promise.reject("拒绝的对象");

// 方式2.等价的
var p2 = new Promise((res, rej)=>{
    rej("这是拒绝的对象2")
})
console.log(p1);
p1.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});