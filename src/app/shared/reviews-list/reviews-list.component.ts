import { Component, OnInit, Input } from '@angular/core';
import { IReviews } from 'src/app/interfaces/i-reviews';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
})
export class ReviewsListComponent implements OnInit {
  @Input() reviews: IReviews[];
  constructor() { }

  ngOnInit() {}

}
