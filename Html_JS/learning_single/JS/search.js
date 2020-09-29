var searchImgDiv = document.querySelector(".img");
var searchBarDiv = document.querySelector(".search-page");
var searchBtn = document.querySelector(".search-btn");
var searchText = document.querySelector(".search-text");
const inputElement = document.querySelector('input[type="text"]');

var isInputZh = false;

searchText.addEventListener('compositionstart', function (e) {
  isInputZh = true;
}, false);
searchText.addEventListener('compositionend', function (e) {
  isInputZh = false;
 
  console.log(searchText.value);
}, false);
searchText.addEventListener('input', function (e) {
  if (isInputZh) return;
  var value = this.value;
 
  console.log(value);
}, false);


searchImgDiv.onclick = function(){
    searchBarDiv.style.display = "block";
}
function getAjax(httpUrl, data, callbackFn){
    var xhr = new XMLHttpRequest();
    var body = document.querySelector("body")
    xhr.open("GET", httpUrl+parseData(data))
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
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

var httpUrl = "https://api.douban.com/v2/movie/in_theaters";
var data = {
    page: 1,
    count: 10,
    start:1, //开始
    count:10,//一页展示多少条
   /*  q:'张艺谋',//关键词 比如： 张艺谋
    tag:'喜剧',//要搜索的电影的标签,比如：动作，奇幻，冒险，喜剧，悬疑，惊悚等 */
}
getAjax(httpUrl, data, function(xhr){
    var obj = JSON.parse(xhr.response)
    console.log(obj);
})

console.log(data);