/* 
groups:
text: "谷歌"
url: "www.google.com"
*/
let str = '<a href="www.google.com">谷歌</a>'
let reg = /<a href="(?<url>.*)">(?<text>.*)<\/a>/;
const result =reg.exec(str);
console.log(result);

/* 正向断言
["555", index: 14, input: "js52111314你知道吗555啦啦啦", groups: undefined]
0: "555"
groups: undefined
index: 14
input: "js52111314你知道吗555啦啦啦"
length: 1
*/
let str1 = 'js52111314你知道吗555啦啦啦';
// (判断值)里面是啦前面才满足
// const reg1= /\d+(?=啦)/;
// const result1 = reg1.exec(str1)

/* 反向断言
[ '555', index: 14, input: 'js52111314你知道吗555啦啦啦', groups: undefined ]
*/
const reg1 =/(?<=吗)\d+/;
const result1 = reg1.exec(str1);
console.log(result1);