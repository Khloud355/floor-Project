import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  navigatorPage: number = 0;
  images:any
  constructor() { }

  ngOnInit(): void {

  }
  onNavigateCarousel(page: { page: number }): void {
    this.navigatorPage = page.page;
  }
}
