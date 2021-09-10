import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  poke = 'https://api.pokemontcg.io/v1/cards';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.listar();
  }


  listar() {
    return this.http.get<any[]>('${this.poke}');
  }
}

