// ES6引入rest参数，用于获取实参
// 获取实参的方式
function date() {
    console.log(arguments);
}
// [Arguments] { '0': 'bob', '1': 'nick', '2': 'fred' }
date("bob","nick","fred")

// rest参数
function date1(...args) {
    console.log(args);
}
// [ 'bob', 'nick', 'fred', 'nid' ]数组可以使用数组方法
date1("bob","nick","fred","nid")

// args必须放在最后
function fn(a,b,...args) {
    console.log(a);
    console.log(b);
    console.log(args); 
}
// 1,2,[3, 4, 5, 6, 7]
fn(1,2,3,4,5,6,7)