import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable()

export class BooksService {
    private n = 1;
    private naruto = "";
    private valores = [0];
    
    constructor(private http: HttpClient) {

    }

    getBook(){
        this.n = Math.floor(Math.random() * 97) + 1;
        while(this.n in this.valores)
            this.n = Math.floor(Math.random() * 97) + 1;
        this.valores.push(this.n);
        this.naruto = `https://naruto-api.herokuapp.com/api/v1/characters/${this.n}`
        return this.http.get(this.naruto);
    }
}