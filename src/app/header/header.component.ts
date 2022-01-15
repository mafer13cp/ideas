import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnClick (ruta: string) {
    switch (ruta) {
      case 'new':
        this.router.navigate([`/newIdea`]);
        break;
      case 'home':
        this.router.navigate([`/home`]);
        break;
      default:
        break;
    }
  }
}
