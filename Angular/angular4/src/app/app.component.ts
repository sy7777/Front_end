import { Component } from '@angular/core';

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

  // 这里$event是接受子组件传来的内容,如果只是event就会显示普通的点击事件，就是以前的XPage....
  get($event){
    console.log($event);
    this.getChildMsg = $event.msg;
  }
}
