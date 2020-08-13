import { Component, OnInit, OnDestroy } from '@angular/core';
import { Card } from '../utils/models/pokemon';
import { DataService } from '../utils/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  data: Card;
  url: string = '123'
  doneData: Subscription;

  constructor(private service: DataService) {
    
  }

  ngOnInit(): void {
    this.onChange()
  }

  onChange() {
    this.service.getData().subscribe((res: Card) => {
      console.log(res)
      this.data = res;
      this.url = res.imageUrlHiRes
    });
  }
}
