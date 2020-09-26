  // 曾经的默认函数
        /* function add(a,b){
            // a是否存在？存在就是a:不存在就是0
            a= a?a:0;
            b=b?b:0;
            return a+b
        }
        let res = add(); //0 */


        // 现在的默认参数形式
        function add(a=0,b=0){
            return a+b
        }
        let res = add(); 
        console.log(res);

let c= 3;
function cba(c=4, d=c){
    console.log(c); //4
    console.log(d); //4
}
cba()
function tt(b=1, d=c){
    console.log(c); //3 调用前面的
    console.log(d); //3
}
tt()
