import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  attributes = [

    {
      "img": "../../assets/floor.jpeg"

    },
    {
      "img": "../../assets/floor.jpeg"

    }, {
      "img": "../../assets/floor.jpeg"

    }

  ]
  navigatorPage: number = 0;
  floorData = [
    { "id": '1', "space": '2290', "basin": '2', "price": '2900' },
    { "id": '2', "space": '10500', "basin": '18', "price": '2600' },
    { "id": '3', "space": '2293', "basin": '20', "price": '2999' },
    { "id": '4', "space": '2293', "basin": '20', "price": '2999' },
    { "id": '5', "space": '5250', "basin": '20', "price": '2999' }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  floorDetails(id: any) {
    this.router.navigate(['floor-details/', id]);
  }
  onNavigateCarousel(page: { page: number }): void {
    this.navigatorPage = page.page;
  }
}
