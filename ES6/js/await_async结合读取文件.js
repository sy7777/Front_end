// 1. 引入fs模块
const fs = require("fs");
const { resolve } = require("path");

// 读取【为学】
function readWeiXue(){
    return new Promise((resolve,reject)=>{
        fs.readFile("../为学.md",(err,data)=>{
            // 如果失败
            if(err) reject(err);

            // 如果成功
            resolve(data);
        })
    })
    
}