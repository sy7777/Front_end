// ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样写更简洁
let name = "Bob";
let change = function(){
    console.log("We will change you!");
}

const school = {
    name,
    change,
    improve(){
        console.log("We can improve your skills!");
    }
}
console.log(school);