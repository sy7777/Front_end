/* 
args:{
    title:温馨提示
    content：“是否在页面添加1个蓝色的div”
    confirmFn: function(){
        var newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "blue";
        newDiv.style.width = "300px";
        newDiv.style.height = "300px";
        body.appendChild(newDiv);
        body.removeChild(zhezhao);
    },
    cancelFn(){

    }
}
*/

export function lcAlert(args){
    var zhezhao = document.createElement("div");
    var body = document.querySelector("body");
    zhezhao.className = "zhezhao";
        zhezhao.innerHTML = `
        <div class="alert animate__animated animate__slideInDown ">
        <div class="header"><span class="title">${args.title}</span><span class="close">x</span></div>
        <div class="main">${args.content}</div>
        <div class="btnList">
            <div class="btn yes">确定</div>
            <div class="btn no">取消</div>
        </div>
    </div>
        `;
    body.appendChild(zhezhao);

    //获取关闭事件
    var closeDiv = document.querySelector(".close");
    closeDiv.onclick = function(){
        body.removeChild(zhezhao);
    }

    var confirmFn = document.querySelector(".btn.yes");
    confirmFn.onclick = function(){
        args.confirmFn()
        //body.removeChild(zhezhao);
        zhezhao.style.position = "fixed";
        zhezhao.className="animate__animated animate__fadeOut";
    }
    var cancelFn = document.querySelector(".btn.no");
    cancelFn.onclick = function(){
        //判断是否为函数，是就执行函数，不是就不执行
        typeof args.cancelFn() == "function"?args.cancelFn():null;
        zhezhao.style.position = "fixed";
        zhezhao.className="animate__animated animate__fadeOut";
        //body.removeChild(zhezhao).className ="animate__animated animate__fadeOut";
    }
}