import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  public picUrl = "https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg";
  public newsLists:any[]=[{
    title: "我是新闻1"
  },{
    title: "我是新闻2"
  },{
    title: "我是新闻3"
  }];

  public flag:boolean = true;
  // 1已支付 2确认订单 3已发货 4已收货 5无效
  public orderStatus:number =3;
  public today:any = new Date();
  constructor() {
    console.log(this.today);

  }

  ngOnInit(): void {
  }

}
