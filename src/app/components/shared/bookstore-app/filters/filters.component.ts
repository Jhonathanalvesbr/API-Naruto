import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  
  busca = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  atualizar(text: any){
    this.busca = text;
    console.log(text);
  }
}
