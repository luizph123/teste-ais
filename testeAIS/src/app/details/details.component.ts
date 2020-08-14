import { Component, OnInit } from '@angular/core';
import { Card } from '../utils/models/pokemon';
import { DataService } from '../utils/services/data.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  data: Card;
  url: string;

  constructor(private service: DataService) {
    this.service.getData().pipe(
      tap((res: Card) => {
        this.url = res.imageUrlHiRes;
        console.log(this.url, 'RES')
      })
    ).subscribe(e => {
      this.data = e;
      console.log(e, 'E')
    });
  }

  ngOnInit(): void {}
}
