/* function Phone(){

}
Phone.name = "手机"；
Phone.change = function(){
    console.log("Ican change the world");
}
let nokia = new Phone();
console.log(nokia.name); //报错 */

class Phone{
    // 静态属性，属于类不属于实例对象
    static name ="手机";
    static change(){
        console.log("我可以改变");
    }
}

let nokia = new Phone();
console.log(nokia.name); //undefined
console.log(Phone.name); //手机