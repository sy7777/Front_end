import { HttpClientModule, HttpHeaders } from '@angular/common/http';
// 当做一个服务
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, PipeTransform } from '@angular/core';
// import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.less']
})
export class TransitionComponent implements OnInit {

  public lists: any[];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

  showAside(){

    // 原生DOM节点获取JS
    const asideDom:any = document.querySelector("#aside");
    // var asideDom:any = document.getElementById("aside"); matrix(1, 0, 0, 1, 200, 0)


 /*    console.log(asideDom.style.webkitTransform);
    asideDom.style.transform = "translate(0,0)" */

    // console.log(asideDom.style.webkitTransform);

/* document.body.style.webkitTransform能获取到数值，还有个前提，是直接在body的style中写。直接用css样式文件设置还是不能获取的。
 */
    if(asideDom.style.webkitTransform == "translate(100%,0)"){
      asideDom.style.transform = "translate(0,0)"
    }
    if(asideDom.style.webkitTransform == "translate(0,0)"){
      asideDom.style.transform = "translate(100%,0)"
    }


  }

/*   hideAside(){
    var asideDom:any = document.querySelector("#aside");
    asideDom.style.transform = "translate(100%,0)"
  } */


  getData(){
    // alert("数据请求")
    let api='http://a.itying.com/api/productlist';
    // rxjs
    this.http.get(api).subscribe((res:any)=>{
      console.log(res);
      this.lists = res.result;
    });
  }

  doLogin(){
    const httpOptions = {headers:new HttpHeaders({'Content-Type': 'application/json'})};
    const api ='http://a.itying.com/api/productlist';
    this.http.post(api,{"pid":"0","title":"精选热菜"},httpOptions).subscribe((res)=>{
      console.log(res);

    })
  }

  getJsonp(){
    /*
    'http://a.itying.com/api/productlist?callback=xxx';
    'http://a.itying.com/api/productlist?cb=xxx';cb || callback与下面的参数对应
    */
    const api ='http://a.itying.com/api/productlist';
    this.http.jsonp(api,"callback").subscribe(res=>{
      console.log(res);

    })
  }
}
