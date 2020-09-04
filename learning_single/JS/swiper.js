var preArrow = document.querySelector(".pre");
var nextArrow = document.querySelector(".next");
var imgListDiv = document.querySelectorAll(".swiper .imgItem");
var currentImg = 0;
var circleDiv = document.querySelectorAll(".circleItem");

nextArrow.onclick = function(){
    currentImg = currentImg + 1;
    if(currentImg >= imgListDiv.length){
        currentImg = 0;
    }
    renderNum();
}

preArrow.onclick = function(){
    currentImg = currentImg - 1;
    if(currentImg < 0){
        currentImg = imgListDiv.length - 1;
    }
     renderNum();
}

function renderNum(){
    //将图片active初始化，去掉
    imgListDiv.forEach(function(item, i){
        item.classList.remove("active")
    });
    circleDiv.forEach(function(item, i){
        item.classList.remove("active")
    })   
        imgListDiv[currentImg].classList.add("active");
        circleDiv[currentImg].classList.add("active");
}

circleDiv.forEach(function(item, i){
    item.onclick = function(){
        var index = i;
        currentImg = index;
        renderNum();
    }
    
})



