var swipe = {
    eventAll:{
        //“自定义的事件名称”：['事件要出发执行的函数1', "事件要出发执行的函数2"]
        
    },
/*     init: function(dom){
        dom.eventAll = {},
        dom.addEvent = this.addEvent
    } */

    addEvent:function(eventName, callbackFn){
        if (this.eventAll[eventName] == undefined){
            eventAll = []
            console.log(this.eventAll);  
            //console.log(this.eventName);  
            console.log(eventName);  
        }
        eventAll[eventName].push(callbackFn);
    },
    emit: function(eventName, eventMsg){
        this.eventAll[eventName].forEach(function(item, i){
            item(eventMsg)
        })
    }
}
swipe.addEvent("swipeLeft", function(eventMsg){
    console.log("swipeLeft");
    console.log(eventMsg);
})
swipe.emit("swipeLeft","这是向左滑动事件")