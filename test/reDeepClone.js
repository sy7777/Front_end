function reDeepClone(inObj){
    if (!inObj || typeof inObj !=="object"){
        return inObj;
    }
        const keys = Object.keys(inObj);
        // console.log(keys); //array key 就是索引
        const clonedObj = {};
        keys.forEach((value)=>{
            console.log(value);
            clonedObj[value]
        })

    return;
}

const inObjArr = [1,2,3,4]
// const inObj = {{
//     name:"aa",
//     age:"11"
// },{
//     name:"bb",
//     age:"22"
// },{
//     name:"cc",
//     age:"33",
// }}
const inObj = {
    name:"aa",
    age:"11",
    gender: "female"
}
reDeepClone(inObj)