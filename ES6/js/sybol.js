//创建symbol
let s = Symbol();
//console.log(s, typeof s);
let s2 = Symbol("bob");
let s3 = Symbol("bob");
console.log(s2 ==s3); //false

let s4 = Symbol.for("nick")
let s5 = Symbol.for("nick")
console.log(s4===s5);   //true

/* symbol不能与其他数据进行运算
u undefined
s string symbol
o object
n null number
b boolean
symbol给对象添加舒缓型和方法
*/
// 向对象中添加方法 up dowm
let game = {};
// 声明一个对象
let method = {
    up: Symbol(),
    down:Symbol()
};
game[method.up] = function(){
    console.log("我可以飞");
}
game[method.down]= function(){
    console.log("我可以穿越");
}
console.log(game);

let youxi ={
    name:"狼人杀",
    [Symbol("say")]:function(){
        console.log("我可以发言");
    },
    [Symbol("zibao")]:function(){
        console.log("我可以自爆");
    }
}
console.log(youxi);