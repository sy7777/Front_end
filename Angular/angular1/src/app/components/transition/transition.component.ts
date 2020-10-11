import { Component, OnInit, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.less']
})
export class TransitionComponent implements OnInit {

  constructor() { }

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
}
