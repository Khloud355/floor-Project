import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-for-sale',
  templateUrl: './land-for-sale.component.html',
  styleUrls: ['./land-for-sale.component.scss']
})
export class LandForSaleComponent implements OnInit {
  floorData = [
    { "id": '1', "distance": '2290', "basin_number": '2', "price": '2900' },
    { "id": '2', "distance": '10500', "basin_number": '18', "price": '2600' },
    { "id": '3', "distance": '2293', "basin_number": '20', "price": '2999' },
    { "id": '4', "distance": '2293', "basin_number": '20', "price": '2999' }
  ]
  price: any;
  array: any = [];
  lowestToHighest: any;
  sortedarray: any;
  priceAsc: any
  distanceAsc: any
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  sortByPrice() {
      this.floorData.sort(function (a, b) {
        return Number(b['price']) - Number(a['price']);
      });
  }
  sortByPricesmall(){
    this.floorData.sort(function (a, b) {
      return Number(a['price']) - Number(b['price']);
    });
  }
  sortBydistance() {
      this.floorData.sort(function (a, b) {
        return Number(b['distance']) - Number(a['distance']);
      });
  }
  sortBydistancesmall(){
    this.floorData.sort(function (a, b) {
          return Number(a['distance']) - Number(b['distance']);
        });
  }
  floorDetails(id: any) {
    this.router.navigate(['floor-details/', id]);
  }
}
