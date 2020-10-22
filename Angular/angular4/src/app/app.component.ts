import { Component, Input } from '@angular/core';
import Axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular4';
  msg = "hello world";
  name = 'Fred';
  sendChildMsg="这是给子元素的数据。";
  getChildMsg="";
  @Input() appMystyle;
  abc = 'bc'
  // 这里$event是接受子组件传来的内容,如果只是event就会显示普通的点击事件，就是以前的XPage....
  get($event){
    console.log($event);
    this.getChildMsg = $event.msg;
  }

  constructor(){
    console.log("This is a Constructor");
  }

  ngOnChanges(){
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("when changes happen");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("第一次显示数据绑定和指令，只有第一次会调用");

  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("ngOnChange，ngOnInit之后会有一次检测");

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("数据渲染到视图之后");

  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log("数据渲染到视图检测之后");

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("完成组件和子组件的初始化");

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("完成组件和子组件的初始化检测后");

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("销毁组件");

  }
}
