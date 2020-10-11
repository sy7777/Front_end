import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { v4 as uuidv4 } from 'uuid';

interface ListItem {
  id: string;
  checkStatus: boolean;
  taskText: string;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public taskText: string;
  public todoLists: ListItem[] = [];
  public itemLists: ListItem[] = [];
  public doneLists: ListItem[] = [];
  public checkStatus: boolean;

  constructor(public storage: StorageService) {
    /*     this.todolistLen = this.todoLists.length;
    this.donelistLen = this.doneLists.length;
    console.log(this.todolistLen); */
  }

  ngOnInit(): void {
    this.todoLists = this.storage.get('todoList') || [];
    this.doneLists = this.storage.get('doneList') || [];
  }

  submit() {
    console.log(this.taskText);
    this.todoLists.push({
      // this.itemLists.push({
      taskText: this.taskText,
      checkStatus: false,
      id: uuidv4(),
    });
    console.log(this.todoLists);

    this.taskText = '';
    this.storage.set('todoList', this.todoLists);
  }
  addItem(e) {
    // console.log(e);
    if (e.keyCode === 13) {
      this.todoLists.push({
        taskText: this.taskText,
        checkStatus: false,
        id: uuidv4(),
      });
      this.taskText = '';
      this.storage.set('todoList', this.todoLists);
    }
  }

  delete(keyitem) {
    if (this.todoLists.includes(keyitem)) {
      this.todoLists.splice(this.todoLists.indexOf(keyitem), 1);
      this.storage.set('todoList', this.todoLists);
    } else if (this.doneLists.includes(keyitem)) {
      this.doneLists.splice(this.doneLists.indexOf(keyitem), 1);
      this.storage.set('doneList', this.doneLists);
    }
  }
  isChecked(e, keyitem) {
    // this.checkStatus=e.target.checked;
    /*     if (keyitem.checkStatus === false) {
      keyitem.checkStatus = true;
    }else if(keyitem.checkStatus === true) {
      keyitem.checkStatus = false;
    } */
    if (keyitem.checkStatus === false) {
      keyitem.checkStatus = true;
      this.todoLists.splice(this.todoLists.indexOf(keyitem), 1);
      this.doneLists.push(keyitem);
    } else if (keyitem.checkStatus === true) {
      keyitem.checkStatus = false;
      this.doneLists.splice(this.doneLists.indexOf(keyitem), 1);
      this.todoLists.push(keyitem);
    }
    this.storage.set('todoList', this.todoLists);
    this.storage.set('doneList', this.doneLists);
    console.log(this.itemLists);
  }

  updateLists() {}
}
