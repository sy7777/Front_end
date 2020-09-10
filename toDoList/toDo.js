//设置全局变量，保存到这里面
if(!localStorage.itemList ){
    var itemList = [];
} else{
    //parse是把字符串变为对象
    var itemList = JSON.parse(localStorage.itemList);
} 

// var itemList = [];
//获取input对象
var inputDom = document.querySelector("#input");
var toDoListDiv = document.querySelector(".doing .list")
//console.log(toDoListDiv)
var doneListDiv = document.querySelector(".done .list")

var mainDiv = document.querySelector(".main");
var doingNumDiv = document.querySelector(".doing .num")
var doneNumDiv = document.querySelector(".done .num")
render(itemList)
updateNum();


//监听输入事件
inputDom.onkeydown = function(event){  
    //console.log(inputDom.value)
    //当按下回车键，获取输入内容，并生成列表
    if(event.key == "Enter"){
        var value = inputDom.value;
        //console.log(value)
        objItem = {
            content:value,
            isDone: false
        }
        itemList.push(objItem);
        console.log(itemList) 
        render(itemList);
        updateNum();    
    }    
}

function render(itemList){
    //将对象转化为Json格式的字符串
    localStorage.itemList = JSON.stringify(itemList);
    // localStorage.itemList = itemList;
    //每一次渲染就清空内容
    toDoListDiv.innerHTML = '';
    doneListDiv.innerHTML = "";
    inputDom.value = "";

    itemList.forEach(function(item, i){
       
        var newItem = document.createElement("div");
        newItem.className = "toDoItem";
        if(item.isDone === false){
            value = item.content;
            newItem.innerHTML = `<input type="checkbox" data-index=${i}>
            <div class="content">${value}</div>
            <div class="del" data-index=${i}>DEL</div>`
            // var currentDoingNum = toDoListDiv.
            //console.log(i)
            toDoListDiv.appendChild(newItem);
            //console.log(doingNumDiv)
            
        }else{
            value = item.content;
            newItem.innerHTML = `<input type="checkbox" checked="checked" data-index=${i}>
            <div class="content">${value}</div>
            <div class="del" data-index=${i}>DEL</div>`

            doneListDiv.appendChild(newItem);
        }
    })
}


toDoListDiv.onchange = function(event){
    //console.log(event);
    var index = event.target.dataset.index;
    itemList[index].isDone = true;
    render(itemList);
    updateNum()
}
doneListDiv.onchange = function(event){
    //console.log(event);
    var index = event.target.dataset.index;
    itemList[index].isDone = false;
    render(itemList);
    updateNum()
}
mainDiv.onclick = function(e){
    console.log(e);
    if (e.target.className === "del"){
        var index = event.target.dataset.index;
        itemList.splice(index,1);
        render(itemList);
        updateNum()
    }
}
function updateNum(){
    var doneNum = doneListDiv.querySelectorAll(".toDoItem").length
    var doingNum = toDoListDiv.querySelectorAll(".toDoItem").length

    doingNumDiv.innerText = doingNum;
    doneNumDiv.innerText = doneNum;
}