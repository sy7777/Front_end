/* var time = new Date();
//创建当前时间,
console.log(time);
var y2 = time.getDate();
//设置时间
time.setFullYear(2008);
console.log(time); */
(function(){
    function responsive(){
        var userAgent = navigator.userAgent;
        // console.log(userAgent)
        var html = document.querySelector("html");
        html.className='';

        if(userAgent.indexOf("iPhone") != -1){
            html.classList.add("iphone")
        } else if(userAgent.indexOf("Android") != -1){
            html.classList.add("android")
        }else if(userAgent.indexOf("iPad") != -1){
            html.classList.add("ipad")
        }else{
            html.classList.add("pc")
        }
    
        //rem布局
        var screenWidth = window.innerWidth;
        var unit = screenWidth / 3.75; //屏幕的宽度/设计稿占满全屏的宽度为多少rem   
        html.style.fontSize = unit + "px";

        if (window.innerWidth < 640){
            html.classList.add("lt640")
            html.classList.add("lt960")
            html.classList.add("lt1200")
        }else if(window.innerWidth < 960){
            html.classList.add("lt960")
            html.classList.add("lt1200")
            html.classList.add("gt640") //大于640
        }else if(window.innerWidth < 1200){
            html.classList.add("gt960")
            html.classList.add("lt1200")
            html.classList.add("gt640") 
        }else{
            html.classList.add("gt960")
            html.classList.add("gt1200")
            html.classList.add("gt640") 
        }
    }
    responsive();
    window.onresize = function(){
        responsive();
    }
})()