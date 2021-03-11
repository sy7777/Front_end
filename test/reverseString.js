function reverse(str){
    if( !str || typeof str !== "string"){
        throw new Error("Wrong input!")
    }
    let len = str.length
    console.log(len);
   let reversedStr = "";
   //    of 打印值， in 是索引
    // for (let s of str)
    for(let i = 0; i < len; i++){
        reversedStr = reversedStr + str[len-i-1]
    }
    return  reversedStr;
}

const reverStr = reverse("I Like You")   //=>  uoY ekiL I
console.log(reverStr);