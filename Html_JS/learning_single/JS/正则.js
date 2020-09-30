// 1.字面量i忽视大小写
var reg = /hello/i;
var str = "helloworld";
// 是否匹配
var result = str.match(reg);
console.log(result);

// 2.构造函数
var reg1 = new RegExp("xiaoming", "i");
/* ^开始 $结束
        []i前面的字符串为a,x,b均可,查找方括号里面的任一内容
        [^abc] 查找不在括号里面的字符
        [0-9] 查找0-9的数字
        [a-z]查找任何从小写a-z的字符，大写同理
        [adgk] 查找给定集合内的任何字符
        （red|blue|green)查找任何指定的选项
        /\w+\s(?=abc)/匹配abc前面的东西,至少1+个单词和空格
        */
var reg2 = new RegExp("[axb]iaoming", "i");
console.log([reg1]);
console.log(reg1);
reg1.test("XIAOMINGNIHAO"); //TRUE
reg2.test("aIAOMINGNIHAO"); //TRUE
