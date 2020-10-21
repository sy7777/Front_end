import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// 富川字要引入input
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // 给要传递的数据命名
  @Input() showItem;
  @Output() childrenMsg = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendMsg(){
    // 向父组件发送消息
    this.childrenMsg.emit({msg:"这是子组件发给父组件的消息！"})
  }
}
