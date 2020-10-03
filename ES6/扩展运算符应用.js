// 数组的合并
const kuaizi = ["王太利", "肖央"];
const fenghuang  = ['曾毅', '玲花'];

// const heti = kuaizi.concat(fenghuang)
/* 和上面方法一样，…把两个数组里面的参数分开了 */
const heti = [...kuaizi,...fenghuang]
console.log(heti);

// 数组克隆
const kelong = [...fenghuang];
console.log(kelong);
