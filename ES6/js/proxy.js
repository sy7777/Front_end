const user = {
    name: "Bob",
    age: 16
}

// 设置代理对象(代理的对象，做什么事情的对象)
const pUser = new Proxy(user,{
    get(target,attr){
        // 代理获取属性事件
        console.log(target);
        console.log(attr);
        return target[attr]
    }
    set(target, attr, value){
        console.log(target);
        console.log(attr);
        console.log(value);
        target[attr] = value;
    }
});

const age = pUser.age