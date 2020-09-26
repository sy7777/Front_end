/* 
swiper(轮播图生成)
*/
var preArrow = document.querySelector(".pre");
var nextArrow = document.querySelector(".next");
var imgListDivs = document.querySelectorAll(".swiper .imgItem");
var currentImg = 0;
var circleDivs = document.querySelectorAll(".circleItem");
var circleListDivs = document.querySelectorAll(".circleList");

nextArrow.onclick = function(){
    currentImg = currentImg + 1;
    if(currentImg >= imgListDivs.length){
        currentImg = 0;
    }
    renderNum();
}

preArrow.onclick = function(){
    currentImg = currentImg - 1;
    if(currentImg < 0){
        currentImg = imgListDivs.length - 1;
    }
     renderNum();
}

function renderNum(){
    //将图片active初始化，去掉
    imgListDivs.forEach(function(item, i){
        item.classList.remove("active")
    });
    circleDivs.forEach(function(item, i){
        item.classList.remove("active")
    })   
    //增加新的active类
        imgListDivs[currentImg].classList.add("active");
        circleDivs[currentImg].classList.add("active");
}

circleDivs.forEach(function(item, i){
    item.onclick = function(){
        //var index = i;
        currentImg = i;
        renderNum();
    }  
}) 

//通过事件代理
/* circleListDivs.onclick = function(event){
    if(event.target.classList.contains("circleItem")){
        var index = parseInt(event.target.id[1]);
        currentImg = index;
        renderNum();
    }
} */


