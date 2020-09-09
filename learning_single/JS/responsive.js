var time = new Date();
//创建当前时间,
console.log(time);
var y2 = time.getDate();
//设置时间
time.setFullYear(2008);

console.log(time);
var userAgent = navigator.userAgent;
console.log(userAgent)
var html = document.querySelector("html");
//var userAgent = "";
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
if (window.innerWidth<640){
    html.classList.add("lt640")
}else if(window.innerWidth<960){
    html.classList.add("lt960")
}