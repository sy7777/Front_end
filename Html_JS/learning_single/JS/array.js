/* var arr = ["蔡徐坤", "huangxiaoming","fanbingbing","Guojingming"];
var newArr = arr.slice(1,3);
console.log(newArr);  */
//["huangxiaoming","fanbingbing"];留下的起始和结束位置，左闭右开，原始数组不改变

var arr1 = [1,3,123,43,322]
var arr2 = arr1.sort();
console.log(arr2); //[ 1, 123, 2, 21, 3, 312 ]
/\`                                                                                                                                                                                                     `     if(a>b){
var fn= function(a,b){
        return 1;
    }else{
        return -1;
    } */
    return a-b;
}
arr3 = arr1.sort(fn);
console.log(arr3);

var arr11 = ["1","3","123","43","322"]
var arr22 = arr11.sort();
console.log(arr22); //[ '1', '123', '3', '322', '43' ]
var fn= function(a,b){
    if(a>b){
        return 1;
    }else{
        return -1;
    }
}
arr33 = arr11.sort(fn);
console.log(arr33);//[ '1', '123', '3', '322', '43' ]字符串没有用