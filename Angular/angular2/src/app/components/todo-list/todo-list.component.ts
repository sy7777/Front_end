import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

interface ListItem{
  id:string;
  checkStatus:boolean;
  taskText:string;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  public taskText:string;
  public todolistLen:number = 0;
  public donelistLen:number = 0;
  public todoLists:ListItem[] = [];
  public doneLists:any[] = [];
  public checkStatus:boolean;

  constructor() {
/*     this.todolistLen = this.todoLists.length;
    this.donelistLen = this.doneLists.length;
    console.log(this.todolistLen); */
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.taskText);
    this.todoLists.push({
      taskText: this.taskText,
      checkStatus: false,
      id: uuidv4()
    });
    console.log(this.todoLists);

    this.taskText = '';
    this.todolistLen = this.todoLists.length;
  }
  addItem(e){
    // console.log(e);
    if (e.keyCode === 13) {
      this.todoLists.push({
        taskText:this.taskText,
        checkStatus: false,
        id: uuidv4()
      });
      this.taskText = '';
      this.todolistLen = this.todoLists.length;
    }
  }

  delete(i){
    this.todoLists.splice(i,1);
    this.todolistLen = this.todoLists.length;
    // this.donelistLen = this.doneLists.length;

  }
  isChecked(e, keyitem){
    // this.checkStatus=e.target.checked;
if (keyitem.checkStatus === false) {
  keyitem.checkStatus = true;
  this.todoLists.splice(this.todoLists.indexOf(keyitem),1);
  this.doneLists.push(keyitem)
}
else if(keyitem.checkStatus === true) {
  keyitem.checkStatus = false;
  this.doneLists.splice(this.doneLists.indexOf(keyitem),1);
this.todoLists.push(keyitem)
}
console.log(this.todoLists);




/*     this.todoLists.forEach(function(item,i){
      // console.log(item);
      console.log(item.checkStatus);
      if(item.checkStatus === false){
        item.checkStatus = true;
      }
      if(item.checkStatus === true){
        item.checkStatus === false
      }
      console.log(item); */
/*       if(item.checkStatus){
        this.todoLists.splice(i,1)
        this.doneLists.push(item);
      } */


    // })
  }

  updateLists(){

  }
}
