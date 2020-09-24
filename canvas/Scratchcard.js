var canvas = document.querySelector("#canvas2");
var cardDom = document.querySelector("#ggk");
var jpDom = document.querySelector(".jp");
var card = canvas.getContext("2d");
// console.log(card);
// 第一个矩形为目标图像
card.fillStyle = "darkgrey";
card.fillRect(0,0,600,200);
card.font="20px Times"
card.fillStyle = "#fff";
card.fillText("刮刮卡",260,100);
card.globalCompositeOperation = "xor";
/*默认值为source-over，源图像叠加为目标图像,source-atop：只显示源图像上面的覆盖部分
source-in：只显示叠加内容, source-out:只显示源图像不叠加的内容
destination-over：之前的目标图像显示在最高层
destination-atop: 只显示源图像加与目标图像覆盖的部分
。。。。
lighter:交叉部分会变色
copy：显示源图像忽略目标图像
xor:等同于lighter，交叉部分镂空
*/
var isdraw = false;
canvas.onmousedown = function(e){
    isdraw = true;
    // console.log(e);
    
}
canvas.onmousemove = function(e){
    if(isdraw){
        var x = e.pageX - cardDom.offsetLeft;
        var y = e.pageY - cardDom.offsetTop;
        card.globalCompositeOperation = "destination-out";
        card.arc(x,y,20,0,2*Math.PI);
        card.fill()
    }

}
canvas.onmouseup = function(e){
    isdraw = false;
    // console.log(isdraw);
}

var arr = [{content:"一等奖：一个月卫生", p:0.1},
{content:"二等奖：一星期卫生", p:0.2},
{content:"三等奖：一天卫生", p:0.3},
{content:"特等奖：谢谢惠顾啊", p:0.4}
]
var randomNum = Math.random()
if(randomNum <= arr[0].p){
    jpDom.innerHTML = arr[0].content;
}else if(randomNum <= arr[1].p+arr[0].p){
    jpDom.innerHTML = arr[1].content;
}else if(randomNum <= arr[1].p+arr[0].p+arr[2].p){
    jpDom.innerHTML = arr[2].content;
}else {
    jpDom.innerHTML = arr[3].content;
}
/* // 第二个蓝色为源图像
card.fillStyle = "deepskyblue";
card.fillRect(200,200,200,200); */