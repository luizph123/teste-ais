import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  pokeSearch = '';

  @Output() searchData: EventEmitter<any> = new EventEmitter()

  constructor(private service: PokemonService,) { }

  ngOnInit() {
  }

  search() {
    this.service.getByName(this.pokeSearch).subscribe((res: Pokemon) => {
       this.searchData.emit(res)
    });
  }

}
