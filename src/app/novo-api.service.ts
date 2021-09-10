import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Card } from './models/models';

@Injectable({
  providedIn: 'root'
})

export class NovoApiService {
  urlNova = 'https://api.pokemontcg.io/v1/cards';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCard(): Observable<Card> {
    return this.httpClient.get<Card>(this.urlNova)
      .pipe(
        retry(2),
      )
  }

  getCardByName(name: string): Observable<Card> {
    var result = this.httpClient.get<Card>(this.urlNova + '?name=' + name)
      .pipe(
        retry(2),

      )


    return result
  }


}
