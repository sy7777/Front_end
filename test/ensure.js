function ensure(value){
    // console.log(typeof value);
    if(!value && typeof value !== "boolean" && typeof value !== "number" && value !== ""){
        throw Error("Your value is null or undefined!")
    }else{
        return value;
    }
    // /??看前面的是不是null and undefined
    // return value ?? 
}
try{
    // console.log(ensure(NaN));
}catch(err){
    console.log(err);
}
console.log(typeof NaN);