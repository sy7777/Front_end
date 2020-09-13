var listDiv = document.querySelector(".videoList");
var playDiv = document.querySelector(".playPage");
var videoDiv = document.querySelector(".playPage video");
var closeDiv = document.querySelector(".playPage .close");
var loadingDiv = document.querySelector(".loading");
var videoList = [];
function renderVideoList(videoList){
    videoList.forEach(function(item, i){
        // console.log(item);
        var itemDiv = document.createElement("div");
        itemDiv.className = "videoItem";
        itemDiv.innerHTML = `
        <div class="videoTop">          
                <div class="img" style="background-image: url(${item.header});"></div>
                <button type="button" data-index=${i}></button>
                <h3 class="title">${item.text}</h3>
                <p>
                    <span class="icon"></span>
                    <span><span class="num">${item.up}</span>次播放</span>
                </p>
            </div>

            <div class="videoBottom">
                <img src="${item.top_comments_header}" srcset="">
                <div class="right">
                    <div class="author">${item.name}</div>
                    <div class="comment">${item.top_comments_content}</div>
                </div>
            </div>
        `
        // listDiv.appendChild(itemDiv);
        listDiv.insertBefore(itemDiv,loadingDiv)
    })
    
}
listDiv.addEventListener("click", function(e){
    //console.log(e);
    if(e.target.tagName == "BUTTON"){
        var index = e.target.dataset.index;
        var item = videoList[index];
        //console.log(item);
        // 播放视频
        playDiv.style.display = "block";
        videoDiv.src = item.video;
        videoDiv.play();

    }
})
//关闭事件
closeDiv.onclick = function(){
    playDiv.style.display = "none";
    videoDiv.pause();   
}
//监听刷新事件
loadingDiv.onclick = function(){
    pageNum ++;
    var http = `https://api.apiopen.top/getJoke?page=${pageNum}&count=5&type-video`;
    getAjax1(http, function (xhr) {
      var obj = JSON.parse(xhr.response);
      console.log(obj);
      videoList = obj.result;
      renderVideoList(videoList);
      scrollTo(0,0)
    });
}