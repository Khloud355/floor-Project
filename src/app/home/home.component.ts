import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  navigatorPage: number = 0;
  images:any

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.images = [{
        "img": "../../assets/floor.jpeg"

      },
      {
        "img": "../../assets/floor.jpeg"

      }, {
        "img": "../../assets/floor.jpeg"

      }

    ]
  }
  onNavigateCarousel(page: { page: number }): void {
    this.navigatorPage = page.page;
  }
}
