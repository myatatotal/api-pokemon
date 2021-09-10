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

  // cartas = [
  //   { id:1, Name: 'Test 1'},
  //   { id:2, Name: 'Test 2'},
  //   { id:3, Name: 'Test 3'}
  // ]

  constructor(private PokemonctgService: ApiService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.PokemonctgService.listar().subscribe(dados => this.pokes = dados);
    // this.PokemonctgService.listar().subscribe(dados => this.maca = dados);
  }

}
