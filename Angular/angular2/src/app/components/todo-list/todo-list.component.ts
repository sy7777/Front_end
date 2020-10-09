import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskText:string;
  public todoLists:any[] = [];
  public doneLists:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.taskText);

    this.todoLists.push(this.taskText);
    this.taskText = '';
  }
}
