var arr=["老王", "老李", "老陈"];
// 复制数组
var arr1=[...arr];
console.log(arr == arr1);  //false内存地址不一样
function get(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
/* 
老王
老李
老陈
用在调用
*/
get(...arr)

// 用在声明
function fn(a,b,...args){
    console.log(a); //1
    console.log(b); //2
    console.log(args);  //[3,4,5]剩余的参数都在这里面
}
fn(1,2,3,4,5)
