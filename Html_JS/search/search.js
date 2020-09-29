var searchImgDiv = document.querySelector(".img");
var searchBarDiv = document.querySelector(".search-page");
var showPageDiv = document.querySelector(".show-page");
var searchBtn = document.querySelector(".search-btn");
var searchText = document.querySelector(".search-text");
const inputElement = document.querySelector('input[type="text"]');
var itemList = [];
var isInputZh = false;
var body = document.querySelector("body")
var movieName = "";
var movieId = "";
searchImgDiv.onclick = function(){
    searchBarDiv.style.display = "block";
}

// input bar
searchText.addEventListener('compositionstart', function (e) {
    isInputZh = true;
  }, false);
searchText.addEventListener('compositionend', function (e) {
    isInputZh = false;
    movieName = searchText.value
    console.log(searchText.value);
  }, false);
searchText.addEventListener('input', function (e) {
    if (isInputZh) return;
    movieName = this.value;
   
    console.log(this.value);
  }, false);
  console.log(movieName+"111");

searchBtn.onclick = function(){
    /* var http = 
    `https://api.jisuapi.com/movie/detail?movieid=${movieId}&moviename=${movieName}&appkey=cf1cd9bb52358324`; */
    var http = `https://api.apiopen.top/getJoke?page=1&count=${movieName}&type-video;`
    getAjax(http, function (xhr) {
      var obj = JSON.parse(xhr.response);
      console.log(obj);
      itemList = obj.result;
      console.log(itemList)
    //   renderVideoList(itemList)
    });
    // searchBarDiv.style.display = "none";
    console.log(itemList);
}

function renderItem(itemList){
    itemList.forEach(function(item, i){
        itemDiv = document.createElement("div");
        itemDiv.className = "show-page";
        itemDiv.innerHTML = `
        <div class="item">
                <div class="item-img"></div>
                <div class="item-name">${item.name}</div>
                <div class="item-year">${item.passtime}</div>
                <div class="item-brief">${item.text}</div>
        </div>
        `
        showPageDiv.appendChild(itemDiv);
    })
}


function getAjax(httpUrl, callbackFn){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", httpUrl)
    xhr.onreadystatechange = function(){
        if(xhr.status == 0 && xhr.readyState == 4){
            /* console.log(xhr);
            console.log(xhr.status);
            console.log(xhr.readyState); */
            //5.处理数据
            callbackFn(xhr);
        }       
    }  
    xhr.send() 
}

function parseData(data){
    var str = "?";
    for (var key in data){
        console.log(key);
        str = str + key + "=" +data[key]+"&";
    }
    return str.substr(0, str.length - 1);
}

// var httpUrl = "";
var data = {
    page: 1,
    count: 10,
    start:1, //开始
    count:10,//一页展示多少条
    moviename: "vedio"
   /*  q:'张艺谋',//关键词 比如： 张艺谋
    tag:'喜剧',//要搜索的电影的标签,比如：动作，奇幻，冒险，喜剧，悬疑，惊悚等 */
}