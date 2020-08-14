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

  constructor(
    private service: PokemonService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.service.getAll().subscribe((res: Pokemon) => {
      this.list = this.sortPokemon(res)
    });
  }

  detail(pokemon: Card) {
    this.router.navigate(['/details']);
    this.dataService.setData(pokemon);
  }

  search(event: any) {
    this.list = this.sortPokemon(event)
  }

  sortPokemon(obj: Pokemon) {
    return obj.cards.sort((a, b) => a.name.localeCompare(b.name));
  }
}
