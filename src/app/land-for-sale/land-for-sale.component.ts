import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-land-for-sale',
  templateUrl: './land-for-sale.component.html',
  styleUrls: ['./land-for-sale.component.scss']
})
export class LandForSaleComponent implements OnInit {
  floorData = [
    { "id": '1', "area": '10500', "basin_number": '2', "price": '2000' },
    { "id": '2', "area": '10500', "basin_number": '18', "price": '2400' },
    { "id": '3', "area": '10500', "basin_number": '20', "price": '2700' },
    { "id": '4', "area": '10500', "basin_number": '20', "price": '3000' }
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
        return Number(b['area']) - Number(a['area']);
      });
  }
  sortBydistancesmall(){
    this.floorData.sort(function (a, b) {
          return Number(a['area']) - Number(b['area']);
        });
  }
  floorDetails(id: any) {
    this.router.navigate(['details/', id]);
  }
}
