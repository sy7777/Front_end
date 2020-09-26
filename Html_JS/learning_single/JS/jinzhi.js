//转化进制
var a = 0x10;
//转化为16进制，99==10*9+9
//ff=> 16 * 15 +15=255,
// 二进制
// 1010=2^3 + 1 + 2^2 *0 + 2^1*1 + 0 = 8+2=10
// var a1 = parseInt(a,16);
// console.log(a1);

/* var n=0;
while(n<100){
    n++;
    // n先加在输出
    console.log("while+"+n);
} */
/* for(m=0;m<100;m++){
    // 先满足条件循环，在m增加
    console.log("for"+m);
} */

//break循环跳出整个大循环
/* for (i=0; i<10; i++){
    if(i==5){
        break;
    }
    console.log(i);
}
console.log("循环结束/+"+i);//输出0，1,2,3,4,循环结束+5 */

//continue跳出当前循环
for (i=0; i<10; i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
console.log("循环结束/+"+i);//输出0，1，2，3，4，6……9，循环结束/+10