import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {
/*
声明属性的几种方式：
public:公有，默认，可以在这个类和类外面访问
protected 保护类型，可以在当前类和她的子类访问
private 私有，只有这个类可以访问
*/
  public title = "我是新闻组件";
  username:string = "张三";
  // 推荐
  public student:any = "我是一个新闻学生shuxing";
  public message:any;
  public content:any = "<h4>我是一个HTML标签</h4>";

  // 定义数组
  public arr=["111","2222","3333"];
  public list:any[]=[];//推荐这种方式
  public lists:Array<any>=[];
  public userlists:any[]=[{
    username:"张三",
    age: 20
  },{
    username:"李四",
    age: 24
  },{
    username:"王五",
    age: 25
  }]
// 原生JS获取DOM节点用getElementById也是可以的
/*


ViewChild获取DOM节点
1. 模板中给DOM起一个名字
<div #myBox>dom元素</div>

2. 在业务逻辑里面引入ViewChild
import{ViewChild} from 'angular/core';

3.@ViewChild("myBox") ele:ElementRef;写在类里面，构造函数上面

4. 生命周期函数里面获取ngAfterViewInit(){
    this.ele.nativeElement;
  }

*/
  @ViewChild("myBox") ele:ElementRef;

  // 获取一个组件
  // @ViewChild("header") myHeader:any;
  @ViewChild("header") header:any;
  constructor() {
    this.message = "这是给属性赋值，也叫改变属性的值"
  }

  ngOnInit(): void {
  }
  // 获取DOM节点
  ngAfterViewInit(){
    console.log(this.ele.nativeElement);
    this.ele.nativeElement.style.width='100px';
    this.ele.nativeElement.style.height='100px';
    this.ele.nativeElement.style.background='red';

    // 调用子组件的方法
    this.header.run();

  }

}
