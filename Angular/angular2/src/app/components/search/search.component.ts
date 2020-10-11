import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  public searchText:string;
  public hisList: any[]=[];
  constructor(public storage: StorageService) {
    // console.log(this.storage.get());

  }

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
