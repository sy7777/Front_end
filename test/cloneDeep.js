function cloneDeep(sourceObj) {
  if (!sourceObj || typeof sourceObj !== "object") {
    return sourceObj;
  }
  // const newObj = {...sourceObj};
  const keys = Object.keys(sourceObj);
  const newObj = {};
  keys.forEach((key) => {
    if (sourceObj[key] instanceof Array) {
      newObj[key] = sourceObj[key].map((value) => cloneDeep(value));
    } else {
      newObj[key] = cloneDeep(sourceObj[key]);
    }
    // if(typeof sourceObj[key] !== "object"){
    //     newObj[key] = sourceObj[key];
    // }else{
    //     newObj[key] = cloneDeep(sourceObj[key])
    // }
  });
  return newObj;
}

// 序列化可实现深克隆，但是会省略掉undefined， function
function cloneDeep2(sourceObj) {
    return JSON.parse(JSON.stringify(sourceObj))
}

const person2 = {
  name: "Hei",
  age: 2,
};
const families = [
  {
    name: "bilibi",
    age: 20,
  },
  {
    name: "aaa",
    age: 11,
  },
];
const person1 = {
  name: "Bill",
  age: 1,
  friend: person2,
  family: families,
  eat: test,
  female: true,
  car: undefined,
  house: null,
};
const cloned1 = cloneDeep2(person1);
// console.log(person1);
console.log(cloned1);
console.log(cloned1.friend === person2);
console.log(cloned1.family === families);
console.log(cloned1.family[1] === families[1]);
console.log(cloneDeep2(person1));
function test() {
  console.log("am test");
}
