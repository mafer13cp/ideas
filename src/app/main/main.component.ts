import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/interfaces/idea';
import { IdeaService } from 'src/services/idea.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  ideas: Idea[] = [];

  constructor(private idea:IdeaService) { }

  ngOnInit(): void {
    this.ngGetIdeas();
  }

  ngGetIdeas() {
    this.idea.getIdeas().subscribe((data) => {
      this.ideas = data;
    })
  }

}
