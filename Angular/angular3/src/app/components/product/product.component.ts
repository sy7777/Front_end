import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

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
