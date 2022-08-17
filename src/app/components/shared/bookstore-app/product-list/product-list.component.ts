import { Component, Input, OnInit, Output } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  personagemService: BooksService;

  personagem: any;
  personagemCopia: any;

  @Input() filtroBusca: string = "";
  @Input() novo: string = "0";

  constructor(personagemService: BooksService) {
    this.personagemService = personagemService;
    this.buscarAPI();
  }


  buscarAPI(): void{
    this.personagem = [];
    this.personagemCopia = [];
    for (let index = 0; index < 12; index++) {
      this.personagemService.getBook().subscribe(d => {
        let livros: any;
        livros = d;
        /*console.log(livros);*/
        if (livros.images.length > 0)
          livros.images = livros.images[Math.floor(Math.random() * livros.images.length) + 0]
        livros.about = livros.about[0]
        this.personagem.push(livros);
        this.personagemCopia.push(livros);
      })
    }
  }
  
  ngOnInit(): void {
    
  }
  
  ngOnChanges() {
    if(this.filtroBusca == ""){
      for (let index = 0; index < this.personagemCopia.length; index++) {
        this.personagem[index] = this.personagemCopia[index];
      }
    }
    else if(typeof(this.filtroBusca) == 'string' && this.filtroBusca.length > 0){
      for (let index = 0; index < this.personagemCopia.length; index++) {
        this.personagem[index] = this.personagemCopia[index];
      }
      this.personagem = this.personagem.filter((p: any) => p.name.toLowerCase().includes(this.filtroBusca.toLowerCase()));
    }
    if(this.novo != "0"){
      this.buscarAPI();
    }
    this.novo = "0";
  }

}
