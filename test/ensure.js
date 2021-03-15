function ensure(value){
    if(!value || typeof value === "undefined"){
        throw Error("Your value is null or undefined!")
    }else{
        return value;
    }
}
try{
    console.log(ensure(undefined));
}catch(err){
    console.log(err);
}