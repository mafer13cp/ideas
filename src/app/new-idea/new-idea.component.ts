import { Component, OnInit } from '@angular/core';
import { Idea } from 'src/interfaces/idea';
import { IdeaService } from 'src/services/idea.service';

@Component({
  selector: 'app-new-idea',
  templateUrl: './new-idea.component.html',
  styleUrls: ['./new-idea.component.css']
})
export class NewIdeaComponent implements OnInit {
  user: string = "";
  summary: string = "";
  assignees: string = "";
  workflow: string = "";
  imgUrl: string = "";
  anonymous: number = 0;
  date: string | null = null;

  constructor(private idea: IdeaService) { }

  ngOnInit(): void {
  }

  ngSetName(name: string) {
    this.user = name;
  }

  ngSetSummary(summary: string) {
    this.summary = summary;
  }

  ngSetAssignees(assignees: string) {
    this.assignees = assignees;
  }

  ngSetWorkflow(workflow: string) {
    this.workflow = workflow;
  }

  ngSetImgUrl(imgUrl: string) {
    this.imgUrl = imgUrl;
  }

  ngSetAnonymous(){
    if(this.anonymous == 0)
      this.anonymous = 1;
    else
      this.anonymous = 0;
    console.log(this.anonymous);
  }

  ngAddIdea (){
    this.date = new Date().toUTCString();
    this.date = this.ngDate(this.date);
    console.log(this.date);
    if (this.user!="" && this.summary!=""
    && this.assignees!="" && this.workflow!="") {
          let newIdea= {
            date: this.date,
            summary: this.summary,
            assignees: this.assignees,
            workflow: this.workflow,
            reviewScore: 0,
            reviewNumber: "0",
            user: this.user,
            anonymous: this.anonymous,
            imgUrl: this.imgUrl
          };
          console.log(newIdea);
          console.log(this.idea.postIdea(newIdea).subscribe(data=> {
          }))
        }
  }

  ngDate(date:string) {
    let month = date.slice(8,11);
    let day = date.slice(5,7);
    let year = date.slice(12,16);
    let hour = date.slice(17,19);
    let min = date.slice(20,22);
    let M = "AM";
    if (parseFloat(hour) > 12) {
      hour = (parseFloat(hour)- 12).toString();
      M = "PM";
    }
    return `${month} ${day}, ${year} ${hour}:${min}${M}`;
  }
  //Sat, 15 Jan 2022 11:42:28 GMT
}
