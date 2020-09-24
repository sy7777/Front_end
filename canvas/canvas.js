var canvas = document.querySelector("#canvas");
var brush = document.querySelector("#brush");
console.log([canvas])
canvas.setAttribute("width",canvas.offsetWidth);
canvas.setAttribute("height",canvas.offsetHeight);
var painting = canvas.getContext("2d");


var huaban = {
    type: "none",
    isdraw : false,
    brushFn:function(e){
        var x = e. pageX- canvas.offsetLeft;
        var y = e. pageY- canvas.offsetTop;
        painting.beginPath();
        painting.arc(x, y, 3, 0,2*Math.PI);
        painting.fill();
        painting.closePath();
    }
}
// console.log(brush)
brush.onclick = function(){
    // brush.className = "btn active";
    brush.classList.add ("active");
    huaban.type = "brush";
    
    }

// 监听鼠标按下事件
canvas.onmousedown = function(){
    huaban.isdraw = true;
   
}
// 监听鼠标抬起事件
canvas.onmouseup = function(){
    huaban.isdraw = false;
}

canvas.onmousemove = function(e){
    if(huaban.isdraw){

        // console.log("1111")
        console.log(huaban.type)

        huaban[huaban.type+"Fn"](e)
    }

}