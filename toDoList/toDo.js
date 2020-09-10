//设置全局变量，保存到这里面
var itemList = [];
//获取input对象
var inputDom = document.querySelector("#input");
var toDoListDiv = document.querySelector(".doing .list")
var doneListDiv = document.querySelector(".done .list")
var mainDiv = document.querySelector(".main");


//监听输入事件
inputDom.onkeydown = function(event){
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
    }
    render(itemList);
}

function render(itemList){
    //每一次渲染就清空内容
    toDoListDiv.innerHTML = '';
    doneListDiv.innerHTML = "";

    itemList.forEach(function(item, i){
       
        var newItem = document.createElement("div");
        newItem.className = "toDoItem";
        if(item.isDone === false){
            value = item.content;
            newItem.innerHTML = `<input type="checkbox" data-index=${i}>
            <div class="content">${value}</div>
            <div class="del" data-index=${i}>DEL</div>`

            toDoListDiv.appendChild(newItem);
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
}
doneListDiv.onchange = function(event){
    //console.log(event);
    var index = event.target.dataset.index;
    itemList[index].isDone = false;
    render(itemList);
}
mainDiv.onclick = function(e){
    console.log(e);
    if (e.target.className === "del"){
        var index = event.target.dataset.index;
        itemList.splice(index,1);
        render(itemList);
    }
}