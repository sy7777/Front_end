
var str = "123";
var b = str;
var str1 = new String('123');
var a  = str1;
str1.name = "a";
str = "12345";
console.log(str);
console.log(str1);
console.log(a);
console.log(b);

var c = new Boolean(true);
console.log(c);

var html = document.children[0];
var body = html.children[1];
console.log(body);
body.innerHTML = `<h1>Hello World<h1>`