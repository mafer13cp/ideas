import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //Inputs
  @Input() summary: string = "Idea summary";
  @Input() user: string = "Anonymous user";
  @Input() date: string = "June 27, 2019, 12:00PM"
  @Input() reviews: string = "---";
  @Input() reviewScore: number = 0;
  @Input() assignees: string = "Assignees";
  @Input() workflow: string = "Idea review";
  @Input() anonymous: Number = 0;

  //
  rating: number = 0; //total score / # of reviews
  stars: string[] = ["star_outlined", "star_outlined", "star_outlined", "star_outlined", "star_outlined"];
  reviewText: string = "( )";

  constructor() { }

  ngOnInit(): void {
    this.ngValidate();
  }

  ngValidate(){
    if(this.anonymous == 1)
      this.user = "Anonymous user";
    if(this.reviews == "0")
      this.reviews = "---";
    else {
      this.rating = Math.floor(this.reviewScore/ parseInt(this.reviews));
      this.ngSetRating();
    }
  }

  ngSetRating() {
    for (let i = 0; i < this.rating; i++) {
      this.stars[i] = "star";
    }
    this.reviewText = `(${this.reviews})`;
  }

}
