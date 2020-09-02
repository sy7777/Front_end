import {lcAlert} from "../learning_single/JS/fengzhuang.js";

var showDiv = document.querySelector("#showCode");
var score = 0;
var scoreDiv = document.querySelector(".scoreDiv");
var body = document.body;

function randomCode(){
    var randomNum = 97 + parseInt(Math.random()*26); 
    //随机出【0,1）

    var randomStr = String.fromCharCode(randomNum); 
    //97是A，将数字变为字母
    console.log(randomStr);

    var ucStr= randomStr.toUpperCase();
    console.log(ucStr);

    showDiv.innerHTML = ucStr;

}
randomCode();

body.onkeypress = function(event){
    console.log(event);
    var keyCode = event.key.toUpperCase();
    if(keyCode === showDiv.innerHTML){
        score++;
        randomCode();
    }else{
        randomCode();
    }
    scoreDiv.innerHTML = `您的得分为：${score}`;
}

var modalAlert = function(){
    lcAlert({
        title: "你的得分",
        content: `你每分钟能打${score*6}分`,
        confirmFn: function(){
            score = 0;
            scoreDiv.innerHTML = `您的得分为：${score}`;
            setTimeout(modalAlert, 10000);
        },
        cancelFn: function(){

        }
    })

}

setTimeout(modalAlert, 10000);
