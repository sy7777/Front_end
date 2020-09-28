function getAjax(httpUrl){
    return new Promise((res,rej)=>{
        var xhr = new XMLHttpRequest();
        //2.设置请求路径和方法,get会将数据拼接到请求路径里，效率高
        //POST会将数据请求拼接到body里面，数据大，安全
        xhr.open("GET", httpUrl)
    
        //3.监听后台是否返回数据
        xhr.onreadystatechange = function(){
            if(xhr.status == 200 && xhr.readyState == 4){
                //5. 处理获取得到的数据
                res(xhr);
            }else if(!xhr.status == 200 && xhr.readyState == 4){
                //6. 处理失败结果
                rej(xhr);
            }
            
        }
        //4.发送数据
        xhr.send()
    })
    console.log(ajaxP);
}
