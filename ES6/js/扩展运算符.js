// [...]扩展运算符能将数组转化为逗号分隔的参数序列
var arr=["老王", "老李", "老陈"];
function chunwan() {
    console.log(arguments);
}
// [Arguments] { '0': [ '老王', '老李', '老陈' ] }只有一个数组参数
chunwan(arr);

// [Arguments] { '0': '老王', '1': '老李', '2': '老陈' }是一个对象三个参数
chunwan(...arr);


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
