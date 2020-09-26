var canvas = document.querySelector("#canvas");
var brush = document.querySelector("#brush");
var rect = document.querySelector("#rect");
var circle = document.querySelector("#circle");
var ease = document.querySelector("#ease");
var allBtn = document.querySelectorAll(".btn");
var colorPicker = document.querySelector(".color-picker");
console.log([canvas])
canvas.setAttribute("width", canvas.offsetWidth);
canvas.setAttribute("height", canvas.offsetHeight);
var painting = canvas.getContext("2d");


var huaban = {
    type: "none",
    isdraw: false,
    beginX: 0,
    beginY: 0,
    currentColor:"black",
    imageData: null,

    brushFn: function (e) {
        var x = e.clientX - canvas.offsetLeft;
        var y = e.clientY - canvas.offsetTop;
        painting.beginPath();
        painting.arc(x, y, 3, 0, 2 * Math.PI);
        painting.fillStyle=this.currentColor;
        painting.fill();
        painting.closePath();
    },

    rectFn: function (e) {
        var x = e.clientX - canvas.offsetLeft;
        var y = e.clientY - canvas.offsetTop;
        painting.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        if(huaban.imageData !=null){
            painting.putImageData(huaban.imageData,0,0,0,0,canvas.offsetWidth,canvas.offsetHeight)
        }
        // 
        painting.beginPath();
        painting.rect(huaban.beginX, huaban.beginY, x - huaban.beginX, y - huaban.beginY);
        painting.strokeStyle=this.currentColor;
        painting.stroke();
        painting.closePath();
    },

    circleFn: function(e){
        console.log(e)
        var x = e.clientX - canvas.offsetLeft;
        var y = e.clientY - canvas.offsetTop;
        var rx = x - huaban.beginX;
        var ry = y - huaban.beginY;
        // var ry = e.offsetY - canvas.offsetTop;
        var r = Math.sqrt(rx*rx+ry*ry);
        painting.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        if(huaban.imageData !=null){
            painting.putImageData(huaban.imageData,0,0,0,0,canvas.offsetWidth,canvas.offsetHeight)
        }
        // 
        painting.beginPath();
        painting.arc(huaban.beginX, huaban.beginY, r, 0, 2*Math.PI);
        painting.strokeStyle=this.currentColor;
        painting.stroke();
        painting.closePath();
    } ,

    easeFn: function(e){
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        painting.beginPath();
        painting.globalCompositeOperation = "destination-out";
        painting.arc(x, y, 6, 0, 2 * Math.PI);
        // painting.fillStyle=this.currentColor;
        painting.fill();
        painting.closePath();
    }


}

// console.log(brush)
brush.onclick = function () {
    // brush.className = "btn active";
    allBtn.forEach(function (item, i) {
        item.classList.remove("active");

    })
    brush.classList.add("active");
    huaban.type = "brush";

}
rect.onclick = function () {
    // brush.className = "btn active";
    allBtn.forEach(function (item, i) {
        item.classList.remove("active");

    })
    rect.classList.add("active");
    huaban.type = "rect";

}

circle.onclick = function (e) {
    // brush.className = "btn active";
    allBtn.forEach(function (item, i) {
        // console.log(item)
        // console.log(i)
        item.classList.remove("active");

    })
    circle.classList.add("active");
    huaban.type = "circle";
}

ease.onclick = function(e){
    allBtn.forEach(function (item, i) {
        item.classList.remove("active");

    })
    ease.classList.add("active");
    huaban.type = "ease";
}

colorPicker.onclick= function(e){
    allBtn.forEach(function (item, i) {
        item.classList.remove("active");
    
    })
    colorPicker.classList.add("active");
    huaban.type = "colorPicker";
    colorPicker.onchange= function(e){
        allBtn.forEach(function (item, i) {
            item.classList.remove("active");
        
        })
        huaban.currentColor = e.target.value;
}
}

// 监听鼠标按下事件
canvas.onmousedown = function (e) {
    huaban.isdraw = true;
    if (huaban.type === "rect" || huaban.type === "circle") {
        var x = e.pageX - canvas.offsetLeft;
        var y = e.pageY - canvas.offsetTop;
        huaban.beginX = x;
        huaban.beginY = y;
        // console.log(huaban.beginX)
        // console.log(x+"111111111")
    } 

}
// 监听鼠标抬起事件
canvas.onmouseup = function () {
    huaban.imageData = painting.getImageData(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    huaban.isdraw = false;

}

canvas.onmousemove = function (e) {
    if (huaban.isdraw && huaban.type !== "none") {

        // console.log("1111")
        // console.log(huaban.type)
        huaban[huaban.type + "Fn"](e)
    }

}