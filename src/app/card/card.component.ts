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
  @Input() date: string = "";
  @Input() reviews: string = "---";
  @Input() reviewScore: number = 0;
  @Input() assignees: string = "Assignees";
  @Input() workflow: string = "Idea review";
  @Input() anonymous: Number = 0;
  @Input() imgUrl: string = "";

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
    if(this.imgUrl==null || this.imgUrl== "")
      this.imgUrl = '../../assets/images/default-img.jpeg';
  }

  ngSetRating() {
    for (let i = 0; i < this.rating; i++) {
      this.stars[i] = "star";
    }
    this.reviewText = `(${this.reviews})`;
  }

}
