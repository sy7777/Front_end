/* 
args:{
    title:温馨提示
    content：“是否在页面添加1个蓝色的div”
    yesFunction: function(){
        var newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "blue";
        newDiv.style.width = "300px";
        newDiv.style.height = "300px";
        body.appendChild(newDiv);
        body.removeChild(zhezhao);
    },
    noFunction(){

    }
}
*/

function tkAlert(args){
var btn = document.querySelector("button");
console.log([btn]);
btn.onclick = function(){
    var d1 = document.querySelector("#d1");
    if (d1.style.backgroundColor ==  "pink"){
        d1.style.backgroundColor =  "aqua";
    }else{
        d1.style.backgroundColor =  "pink";
    }           
}

//2.弹框
var btnTan = document.querySelector("button:nth-child(3)")
//console.log(document.querySelector("button"))
//console.log(btnTan);
btnTan.onclick = function(){
    var zhezhao = document.createElement("div");
    zhezhao.className = "zhezhao";
    zhezhao.innerHTML = `
    <div class="alert">
    <div class="header"><span class="title">温馨提示</span><span class="close">x</span></div>
    <div class="main">【第三方产品责任】是否添加一个蓝色DIV？</div>
    <div class="btnList">
        <div class="btn yes">确定</div>
        <div class="btn no">取消</div>
    </div>
</div>
    `;
    var body = document.querySelector("body");
    body.appendChild(zhezhao);

    //获取关闭事件
    var closeDiv = document.querySelector(".close");
    closeDiv.onclick = function(){
        body.removeChild(zhezhao);
    }

    var yes = document.querySelector(".btn.yes");
    console.log(yes)
    yes.onclick = function(){
        var newDiv = document.createElement("div");
        newDiv.style.backgroundColor = "blue";
        newDiv.style.width = "300px";
        newDiv.style.height = "300px";
        body.appendChild(newDiv);
        body.removeChild(zhezhao);
    }
    var no = document.querySelector(".btn.no");
    console.log(no)
    no.onclick = function(){
        body.removeChild(zhezhao);
    }
}
}