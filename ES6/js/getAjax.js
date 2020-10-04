function getAjax(httpUrl) {
  return new Promise((res, rej) => {
    // 1. 创建对象
    const xhr = new XMLHttpRequest();

    //2.设置请求路径和方法,get会将数据拼接到请求路径里，效率高
    //POST会将数据请求拼接到body里面，数据大，安全
    xhr.open("GET", httpUrl);

    //3.监听后台是否返回数据
    xhr.onreadystatechange = function () {
      // 200-299响应状态均为成功
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status <= 300) {
          //5. 处理获取得到的数据
          const DATA = JSON.parse(xhr.response);
          res(DATA);
        }
      } else if (!xhr.readyState === 4) {
        //6. 处理失败结果
        rej(xhr.status);
      }
    };
    //4.发送数据
    xhr.send();
  });
}
// 指定回调


async function test() {
  const http = `https://api.apiopen.top/getJoke?page=1&count=5&type-video`;
  const result = await getAjax(http);
}
test();

async function getMusic() {
  const http = `https://api.apiopen.top/musicRankings`;
  const result = await getAjax(http);
  console.log(result.result);
  const newRes = result.result;
  for (let i = 0; i < newRes.length; i++) {
    const content = result.result;
    const typeName = newRes[i].name;
    console.log(content);
    const musicName = content[i].album_title;
    console.log(content);
    // $('body').append(`<h2>${typeName}</h2>`)
    for (let j = 0; j < content.length; j++) {
      // 同步的，很慢
      // const musicDetail = await getAjax(`https://api.apiopen.top/musicDetails?id=${content['song_id']}`);

      // promise操作
      /* const http = `https://api.apiopen.top/musicDetails?id=${content['song_id']}`
            const musicDetail = getAjax(http).then((res,rej)=>{
                console.log(musicDetail);
                // 渲染操作
            }); */

      let fn = async function () {
        const http = `https://api.apiopen.top/musicDetails?id=${content["song_id"]}`;
        const musicDetail = await getAjax(http);
        // console.log(musicDetail);
        $("body").append(`<h4>${musicName}:音乐${content[j]}</h4>`);
      };
      fn();
    }
  }
}
getMusic();
// 获取音乐排行榜
