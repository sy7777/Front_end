// 异步编程 纯回调函数 node fs ajax mongodb
function * gen(arg){
    // console.log("hello generTOR");
    
    // 分隔符，会执行到yield前面停止，通过不停调用next(),才能执行下一个
    console.log(arg);
    let one = yield "一直没有耳朵";
    console.log(one);
    let two = yield "一直没有眼睛";
    console.log(two);

}
let iterator =gen("AAA");//不会被调用
/* 
AAA
{ value: '一直没有耳朵', done: false }
返回和上一个yield一起，，这返回第一个yield，没有上一个，所以BBB传参不显示
*/
console.log(iterator.next("BBB"));
/* 调用没有眼睛yield
AAA
{ value: '一直没有耳朵', done: false }
CCC
{ value: '一直没有眼睛', done: false } */
console.log(iterator.next("CCC"));
/*  DDD
{ value: undefined, done: true }*/
console.log(iterator.next("DDD"))   //才会被调用