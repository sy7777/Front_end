/* var body = document.querySelector("body");
body.ontouchstart = function(event){
    // console.log(event,"触碰时间开始")
}
body.ontouchmove = function(event){
    // console.log(event,"触碰移动开始")
}
body.ontouchend = function(event){
    // console.log(event,"触碰结束了")
} */
//1. 定义自定事件
//2. 设定四个方向
//
//
//swipe.addEvent（“自定义事件名称”，事件触发执行函数（先不执行，在某个地方储存起来））
//swipe.emit（“自定义事件名称”，传入事件触发的信息）
var swipe = {
    eventAll:{
        //“自定义的事件名称”：['事件要出发执行的函数1', "事件要出发执行的函数2"……]       
    },

    init: function(dom){
        dom.eventAll = {},
        dom.addEvent = this.addEvent;
        dom.emit = this.emit;
        dom.removeEvent = this.removeEvent;
        dom.touchesData= {};

        dom.addEventListener("touchstart",function(e){
            // console.log(e,"start");
            this.touchesData.startX = e.touches[0].pageX;
            this.touchesData.startY = e.touches[0].pageY;
        })
        dom.addEventListener("touchmove",function(e){
            // console.log(e);
            this.touchesData.endX = e.touches[0].pageX;
            this.touchesData.endY = e.touches[0].pageY;
        })
        // 结束事件没有pageXY的位置，只能通过移动来获取
        dom.addEventListener("touchend",function(e){
            // console.log(e,"end");
            
            var x = this.touchesData.endX - this.touchesData.startX;
            var y = this.touchesData.endY - this.touchesData.startY;
        
            if((Math.abs(x)> Math.abs(y)) && Math.abs(x)>100){
                if(x>0){
                    // console.log("向右滑");
                    body.emit("swipeRight","这是向右滑动事件");
                }else{
                    // console.log("向左滑");
                    body.emit("swipeLeft","这是向左滑动事件");
                }
            }else if((Math.abs(x)< Math.abs(y)) && Math.abs(y)>100){
                if(y>0){
                    // console.log("向下滑");
                    body.emit("swipeDown","这是向下滑动事件");
                }else{
                    // console.log("向上滑");
                    body.emit("swipeTop","这是向上滑动事件");
                }
            }
        })
    },
    addEvent:function(eventName, callbackFn){
        // this.init(dom);
        if (this.eventAll[eventName] == undefined){
            this.eventAll[eventName] = []
            //console.log(this.eventAll);  
            //console.log(this.eventName);  
            console.log(eventName);  
        }      
        this.eventAll[eventName].push(callbackFn);
        console.log(this.eventAll); 
    },
    emit: function(eventName, eventMsg){
        console.log(this.eventAll[eventName])
        if(this.eventAll[eventName] != undefined){
            this.eventAll[eventName].forEach(function(item, i){
                //console.log(item)
                item(eventMsg)
            }
        
        )}
    },
    removeEvent:function(eventName, callbackFn){
        var that = this;
        this.eventAll[eventName].forEach(function(item, i){
            if(item == callbackFn){
                //这个this是指function针对的对象，应该是item，不是wipe的对象
                that.eventAll[eventName].splice(i,1)
            }
        })
    }
}