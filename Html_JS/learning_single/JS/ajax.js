
        //1.创建XHR对象
        var xhr = new XMLHttpRequest();
        var body = document.querySelector("body")
        //2.设置请求路径和方法,get会将数据拼接到请求路径里，效率高
        //POST会将数据请求拼接到body里面，数据大，安全
        xhr.open("GET", "http://127.0.0.1:5500/HTML/learning_single/html/abc.txt")
        //3.发送数据
        xhr.send()
        //4.监听后台是否返回数据
        xhr.onreadystatechange = function(){
            if(xhr.status == 200 && xhr.readyState == 4){
                console.log(xhr);
                console.log(xhr.status);
                console.log(xhr.readyState);
                //5.处理数据
                var res = xhr.response;
                var h1 = document.createElement("h1");
                h1.innerHTML = res;
                body.append(h1);
            }
            
        }
