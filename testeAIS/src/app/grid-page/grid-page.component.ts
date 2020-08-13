import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../utils/services/pokemon.service';
import { DataService } from '../utils/services/data.service';
import { Pokemon, Card } from '../utils/models/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss'],
})
export class GridPageComponent implements OnInit {
  list = [];
  pokeSearch = '';

  constructor(private service: PokemonService, private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.service.getAll().subscribe((res: Pokemon) => {
      this.list = res.cards;
    });
  }

  detail(pokemon: Card) {
    this.router.navigate(['/details']);
    console.log(pokemon, 'COMP A')
    this.dataService.setData(pokemon);
  }

  search() {
    this.service.getByName(this.pokeSearch).subscribe((res: Pokemon) => {
      this.list = res.cards;
    });
  }
}
