// async函数
async function fn(){
    // 只要返回结果不是一个promise的对象，则fn的返回结果是一个成功的promise
    // return
    // return"UQ"

    // 抛出错误择时reject，返回失败的promise
    // throw new error("出错了")

    // 返回结果是一个promise对象，则fn也是返回的promise
    return new Promise((resolve,reject)=>{
        // resolve("成功的数据")
        reject("失败的数据");
    })
}

const result = fn();
result.then(value=>{
    console.log(value);
},reason=>{
    console.warn(reason);
})

// 创建promise对象
const p = new Promise((resolve, reject)=>{
    resolve("success")
})
// await 要放在async函数中，但是后者不一定要前者
async function main(){
    try {
        let result = await p;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    
}
main();