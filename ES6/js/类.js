// ES5语法
/* function Phone(brand, price) {
    this.brand = brand;
    this.price = price;
}
// 增加方法
Phone.prototype.call = function() {
    console.log("我可以打电话");
}
// 实例化对象
let Huawei = new Phone("华为", 5000);
console.log(Huawei);
Huawei.call() */

// ES6的语法
class Phone{
    // 构造方法
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    // 方法必须使用这种形式的语法，不能使用ES5的对象完整形式
    call(){
        console.log("I can call");
    }
    get price(){
        console.log("价格属性被读取了");
        return "I love you."
    }
    // 必须有参数
    set price(newPrice){
        console.log("价格属性被修改了");
    }
}

class SmartPhone extends Phone{
    // 构造方法
    constructor(brand, price, color, size){
        super(brand, price);//phone.call()
        this.color = color;
        this.size = size;
    }
    photo(){
        console.log("拍照");
    }
    playGame(){
        console.log("玩游戏");
    }
}

let onePlus = new Phone("1+", 1999)
console.log(onePlus);
const xiaomi = new SmartPhone("小米", 1999, "褐色","4.7inches");
/* xiaomi.call();
xiaomi.photo();
xiaomi.playGame(); */
console.log(xiaomi.price); 
xiaomi.price = "free"