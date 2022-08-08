import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  personagemService: BooksService;

  personagem: any;

  constructor(personagemService: BooksService) {
    this.personagemService = personagemService;
  }

  ngOnInit(): void {
    this.personagem = []
    for (let index = 0; index < 12; index++) {
      this.personagemService.getBook().subscribe(d => {
        let livros: any;
        livros = d;
        /*console.log(livros);*/
        if (livros.images.length > 0)
          livros.images = livros.images[Math.floor(Math.random() * livros.images.length) + 0]
        livros.about = livros.about[0]
        this.personagem.push(livros)
      })
    }
  }

}
