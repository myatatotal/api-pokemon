import { Component, OnInit } from '@angular/core';

import { NovoApiService } from './novo-api.service';
import { Card } from './models/models';
import { Item } from './models/models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  card = {} as Card;
  item = {} as Item;


  constructor(private cardService: NovoApiService) {}

  ngOnInit() {
    this.getCard();
  }

  getCard() {
    this.cardService.getCard().subscribe((card: Card) => {
      this.card = card;
    });
  }

  getCardByName(name: string) {
    this.cardService.getCardByName(name).subscribe((card: Card) => {
      this.card = card;
    });
  }


}
