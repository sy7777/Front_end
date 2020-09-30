// let p1 = Promise.resolve("成功1");
let p1 = new Promise((res)=>{
    setTimeout(() => {
        res("成功1");
    }, 200);
});


let p2 = Promise.resolve("成功2");
let p3 = Promise.resolve("成功3");
let p4 = Promise.resolve("成功4");
let p5 = Promise.resolve("成功5");

const arr = [p1, p2, p3, p4, p5];

// 有多个异步操作，只要有一个返回结果就执行,相当于淘汰机制
const result = Promise.race(arr);
result.then((res)=>{
    console.log(res);
})