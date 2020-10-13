import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
/*
1.JS进行跳转路由
引入声明模块import { Router} from '@angular/router';
constructor声明
2. 跳转
this.router.navigate(['/newscontent/',1234])
3.get传值
    let queryParams: NavigationExtras={
      queryParams:{'aid':123}
    }
    在对象里面声明传值的数据

*/
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goRouter(){
    // 没有配置动态路由就这样写[]，配置了参数就还需要一个【.., xx】
    this.router.navigate(['/newscontent/',1234])
  }
  goNews(){
    let queryParams: NavigationExtras={
      queryParams:{'aid':123}
    }
    this.router.navigate(['/news'], queryParams)
  }
}
