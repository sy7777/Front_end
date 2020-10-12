/*
1.在news组件中[queryParams]='{aid:key}属性传值
2.接收import constructor，
this.route.queryParams.subscribe((data)=>{
      console.log(data);

    })

动态路由：
1.{path:'newscontent/:aid', component:NewscontentComponent},
2.接收<a [routerLink]="['/newscontent',key ]">{{key}}---{{item}}</a>
3.this.route.params.subscribe((data)=>{
      console.log(data);

    })
*/
// 需要获取news组件里面传过来的ID值
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.scss']
})
export class NewscontentComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    // 无法直接.value获取值,get传值
    console.log(this.route.queryParams);
    /* this.route.queryParams.subscribe((data)=>{
      console.log(data);

    }) */
    // 动态路由传值
    this.route.params.subscribe((data)=>{
      console.log(data);

    })

  }

}
