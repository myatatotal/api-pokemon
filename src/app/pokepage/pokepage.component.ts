import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

import { Card } from '../models/models';
import { Item } from '../models/models';

@Component({
  selector: 'app-cartas',
  templateUrl: './pokepage.component.html',
  styleUrls: ['./pokepage.component.scss']
})
export class PokepageComponent implements OnInit {

pokes: Array<any> = new Array();

  constructor(private PokemonctgService: ApiService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.PokemonctgService.listar().subscribe(dados => this.pokes = dados);
  }

}
