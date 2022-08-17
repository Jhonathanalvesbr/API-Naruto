import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bookstore-app',
  templateUrl: './bookstore-app.component.html',
  styleUrls: ['./bookstore-app.component.css']
})
export class BookstoreAppComponent implements OnInit {


  @Input() textoBusca: any;


  constructor() { }

  ngOnInit(): void {
  }

  recebeBusca(text: any){
    this.textoBusca = text;
  }

}
