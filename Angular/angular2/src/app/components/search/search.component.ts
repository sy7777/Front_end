import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  public searchText:string;
  public hisList: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.hisList.push(this.searchText);
    // console.log(this.searchText);
    this.searchText = '';
    console.log(this.hisList);

  }

  delete(i){
    // alert(i)
    this.hisList.splice(i,1);
  }
}
