/* 1s后生成1,2s后生成2,3s后生成3
但是这样写锁紧太厉害 */
/* setTimeout(()=>{
    console.log(111);
    setTimeout(()=>{
        console.log(222);
        setTimeout(()=>{
            console.log(333);
        },3000)
    },2000)
},1000) */

function one() {
    setTimeout(()=>{
        console.log(1);
        iterator.next();
    },1000)
    
}
function two() {
    setTimeout(()=>{
        console.log(2);
        iterator.next();
    },2000)
    
}
function three() {
    setTimeout(()=>{
        console.log(3);
        iterator.next();
    },3000)
    
}

function * gen(){
    yield one();
    yield two();
    yield three();
}

// 调用生成器函数
let iterator =gen();
iterator.next();