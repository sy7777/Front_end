// 1. let不能重复声明变量
/* let star = "zhu";
let star = "Luozhixiang";  */

// 2. 块级作用域，全局，函数if else while for
/* {
    let girl = "Grace";
}
console.log(girl);  */  //抱错girl is not defined

// 3. 不存在变量提升
/* console.log(star)    //如果是var就会显示undefined，否则报错
let star = "周扬青" */

//4. 不影响作用域链
{
    let school = "UQ";
    function fn() {
        console.log(school);
    }
    // 会显示UQ，这个作用域块没有，会向上一级寻找school变量
    fn();
}

{const AAB = "player";}
console.log(AAB); //报错