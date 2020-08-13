import { Injectable } from '@angular/core';
import { Card } from '../models/pokemon';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new Subject<Card>();

  constructor() {}

  getData(): Observable<Card> {
    return this.data.asObservable();
 }

 setData(data: any) {
  this.data.next(data);
  console.log(data, 'RECEBE DATA')
}

}
