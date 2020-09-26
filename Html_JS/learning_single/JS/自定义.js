/* 
cartEvent.addEvent("事件名称"，事件执行函数)
cartEvent.addEvent("addBuyCar"，fn1) 发送用户消息，添加购物车成功
cartEvent.addEvent("addBuyCar"，fn2) 购物车栏目里，商品数量+1
cartEvent.addEvent("addBuyCar"，fn1) 往后台发送购物车添加新数量

自定义触发事件
cartEvent.emit("addBuyCar") 触发事件时事件里所有函数在此时执行
*/
//设计模式：观察者模式，订阅模式事件模式
var cartEvent = {
    event:{
        //"addBuyCar":[fn1,fn2,fn3]
    },
    addEvent:function(evetname, fn){
        if(this.event[evetname] == undefined){
            this.event[evetname] == [];
        }
        this.event[evetname].push(fn);
    },
    emit:function(eventname, fn){
        var fnList = this.event[eventname];
        fnList.forEach(function(item, i){
            item();
        });
    },
    remove:function(eventname, fn){
        
    }
}
cartEvent.addEvent("Jay Chou concert",function(){
    console.log("Buy it.")
})
cartEvent.addEvent("Jay Chou concert",function(){
    console.log("Cancel it.")
})