import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  defaultUrl = 'https://api.pokemontcg.io/v1/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.defaultUrl + 'cards');
  }

  getByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.defaultUrl + 'cards?name=' + name);
  }
}
