const banji = {
    name: "终极一班",
    stus:[
        "xiaoming",
        "xiaoning",
        "xiaotian",
        "knight"
    ],
    [Symbol.iterator](){
        return{
            next: function(){
                return{
                    value:"abc",
                    done: false
                }
            }
        }
    }
}
// 遍历这个对象
for (let v of banji) {
    // 报错，因为没有iterator这个属性接口要加接口
    console.log(v);
}