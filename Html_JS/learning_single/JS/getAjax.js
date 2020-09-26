function getAjax1(httpUrl,callbackFn){
            //1.创建XHR对象
            var xhr = new XMLHttpRequest();
            var body = document.querySelector("body")
            //2.设置请求路径和方法,get会将数据拼接到请求路径里，效率高
            //POST会将数据请求拼接到body里面，数据大，安全
            xhr.open("GET", httpUrl)
            //3.发送数据
            xhr.send()
            //4.监听后台是否返回数据
            xhr.onreadystatechange = function(){
                if(xhr.status == 200 && xhr.readyState == 4){
                    /* console.log(xhr);
                    console.log(xhr.status);
                    console.log(xhr.readyState); */
                    //5.处理数据
                   /*  var res = xhr.response;
                    var h1 = document.createElement("h1");
                    h1.innerHTML = res;
                    body.append(h1); */
                    callbackFn(xhr);
                }
                
            }
}
function getAjax2(httpUrl, data, callbackFn){
    //1.创建XHR对象
    var xhr = new XMLHttpRequest();
    var body = document.querySelector("body")
    //2.设置请求路径和方法,get会将数据拼接到请求路径里，效率高
    //POST会将数据请求拼接到body里面，数据大，安全
    xhr.open("GET", httpUrl+parseData(data))
    //3.发送数据
    xhr.send()
    //4.监听后台是否返回数据
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            /* console.log(xhr);
            console.log(xhr.status);
            console.log(xhr.readyState); */
            //5.处理数据
            callbackFn(xhr);
        }       
    }   
}

function parseData(data){
    var str = "?";
    for (var key in data){
        console.log(key);
        str = str + key + "=" +data[key]+"&";
    }
    return str.substr(0, str.length - 1);
}

var httpUrl = "https://api.apiopen.top/getJoke";
var data = {
    page: 1,
    count: 10,
    type: "vedio"
}
getAjax2(httpUrl, data, function(xhr){
    var obj = JSON.parse(xhr.response)
    console.log(obj);
})