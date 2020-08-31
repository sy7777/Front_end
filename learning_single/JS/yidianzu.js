var contentArray = {
  code: 0,
  message: null,
  data: [
    {
      id: 5,
      query: "启天M420",
      url: "https://www.edianzu.com/category?title=M420&errorCheck=1",
      oid: 1,
      type: null,
      target: 0,
      status: false,
      cdate: 1463401393000,
      managerId: 0,
      mdate: 1598240812000,
    },
    {
      id: 7,
      query: "惠普S01",
      url:
        "https://www.edianzu.com/category?title=S01&sort=0&page=1&errorCheck=1",
      oid: 2,
      type: null,
      target: 0,
      status: false,
      cdate: 1473130000000,
      managerId: 0,
      mdate: 1598240812000,
    },
    {
      id: 6,
      query: "星14",
      url: "https://www.edianzu.com/category?title=%E6%98%9F14&errorCheck=1",
      oid: 3,
      type: null,
      target: 0,
      status: false,
      cdate: 1463401410000,
      managerId: 0,
      mdate: 1598240812000,
    },
    {
      id: 3,
      query: "L13",
      url:
        "https://www.edianzu.com/category?title=L13&sort=0&page=1&errorCheck=1",
      oid: 4,
      type: null,
      target: 0,
      status: false,
      cdate: 1457936401000,
      managerId: 1,
      mdate: 1598240812000,
    },
    {
      id: 8,
      query: "L490",
      url: "https://www.edianzu.com/category?title=L490&sort=2&page=1",
      oid: 5,
      type: null,
      target: 0,
      status: false,
      cdate: 1473410909000,
      managerId: 0,
      mdate: 1598240812000,
    },
    {
      id: 2,
      query: "T430",
      url:
        "https://www.edianzu.com/category?title=T430&brandId=34&sort=2&isSale=0&page=1",
      oid: 6,
      type: null,
      target: 0,
      status: false,
      cdate: 1457936322000,
      managerId: 1,
      mdate: 1598240812000,
    },
    {
      id: 1,
      query: "3490",
      url:
        "https://www.edianzu.com/category/77?sort=0&errorCheck=1&title=3490&page=1",
      oid: 7,
      type: null,
      target: 0,
      status: false,
      cdate: 1457936278000,
      managerId: 1,
      mdate: 1598240812000,
    },
    {
      id: 4,
      query: "P43",
      url:
        "https://www.edianzu.com/category?title=P43&sort=0&page=1&errorCheck=1",
      oid: 8,
      type: null,
      target: 0,
      status: false,
      cdate: 1463401379000,
      managerId: 1,
      mdate: 1598240812000,
    },
    {
      id: 10,
      query: "L14",
      url:
        "https://www.edianzu.com/category?title=ThinkPad+L14&sort=0&page=1&errorCheck=1",
      oid: 9,
      type: null,
      target: 0,
      status: false,
      cdate: 1532453933000,
      managerId: 1,
      mdate: 1598240812000,
    },
    {
      id: 20,
      query: "MacBook pro",
      url:
        "https://www.edianzu.com/category/77?title=MacBook+pro&sort=2&errorCheck=1&page=1",
      oid: 10,
      type: null,
      target: 0,
      status: false,
      cdate: 1533112630000,
      managerId: 0,
      mdate: 1598240812000,
    },
  ],
};

var div = document.querySelector('#content');
var data = contentArray.data;
for(var i = 0; i < data.length; i++){
    dataItem = data[i];
    var query = dataItem.query;
    console.log(query);
/*     var h1 = document.createElement("h1");
    const a = document.createElement("a"); */
    div.innerText = `titile${query}`;
/*     a.href = dataItem.url;
    h1.appendChild(a);
    div.appendChild(h1); */
}

// div.innerText = data.query[1];