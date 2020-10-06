import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo:any={
    username: '',
    gender: '',
    cities:['北京','上海', '深圳', '成都', '广州'],
    city:'',
    hobbies:[{
      title:"吃饭",
      checked:false
    },{
      title:"睡觉",
      checked:false
    },{
      title:"打豆豆",
      checked:false
    }],
    notes:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    console.log(this.peopleInfo);

  }

}
