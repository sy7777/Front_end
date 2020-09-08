/* 
swiper(轮播图生成)
*/
function swiper(selector, imgList) {
  //var preArrow = document.querySelector(`${selector}.pre`);
  //var nextArrow = document.querySelector(`${selector}.next`);
 // var nextArrow = document.querySelector(selector + " .next");
    var swiperDiv = document.querySelector(selector);

  function createSwiperHtml(imgList) {
    var imgListDiv = document.createElement("div");
    var circleListDiv = document.createElement("div");

    imgListDiv.className = "imgList";
    circleListDiv.className = "circleList";
    imgList.forEach(function (item, i) {
      if (i == 0) {
        imgListDiv.innerHTML =
          imgListDiv.innerHTML +
          `<div class="imgItem active" style="background-image: url(${item}); "></div>`;
        circleListDiv.innerHTML =
          circleListDiv.innerHTML +
          `<div id="c${i}" class="circleItem active"></div>`;
      } else {
        imgListDiv.innerHTML =
          imgListDiv.innerHTML +
          `<div class="imgItem" style="background-image: url(${item}); "></div>`;
        circleListDiv.innerHTML =
          circleListDiv.innerHTML + `<div id="c${i}" class="circleItem"></div>`;
      }
    });
    swiperDiv.appendChild(imgListDiv);
    swiperDiv.appendChild(circleListDiv);
    swiperDiv.innerHTML += `<div class="arrowList">
                                <div class="arrow pre"><</div>
                                <div class="arrow next">></div>
                            </div>`;
  }
    createSwiperHtml(imgList);
    var preArrow = document.querySelector(selector + " .pre");
    var nextArrow = document.querySelector(selector + " .next");
    var imgListDivs = document.querySelectorAll(selector + " .imgItem");
    var circleDivs = document.querySelectorAll(selector + " .circleItem");
    var currentImg = 0;

    console.log(nextArrow)
    console.log(preArrow)
    
    nextArrow.onclick = function(){
        currentImg = currentImg + 1;
        if(currentImg >= imgListDivs.length){
            currentImg = 0;
            //renderNum();
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
}
//通过事件代理
/* circleListDiv.onclick = function(event){
    if(event.target.classList.contains("circleItem")){
        var index = parseInt(event.target.id[1]);
        currentImg = index;
        renderNum();
    }
} */
var imgList = [
  "../img/banner.jpg",
  "../img/banner1.jpg",
  "../img/banner2.jpg",
  "../img/banner4.jpg",
  "../img/banner3.jpg",
];
var swiper = swiper(".swiper", imgList);
