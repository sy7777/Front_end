// res解决问题，事情异步成功
// rej拒绝，异步失败
var p = new Promise((res,rej)=>{
    if(false){
        res("数据请求成功");
    }else{
        rej("数据请求失败");
    }
});
p.then((res)=>{
    // console.log("调用成功");
    console.log(res); //true数据请求成功
},(rej)=>{
    console.log(rej);  //false数据请求失败
})
p.catch((err)=>{
    console.log(`catch:${err}`); //catch:数据请求失败

})
// p.finally不管怎样都会执行
