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
    { "id": '1', "distance": '2290', "basin_number": '2', "price": '2900' },
    { "id": '2', "distance": '10500', "basin_number": '18', "price": '2600' },
    { "id": '3', "distance": '2293', "basin_number": '20', "price": '2999' },
    { "id": '4', "distance": '2293', "basin_number": '20', "price": '2999' }
  ]
  price: any;
  array: any=[];
  lowestToHighest: any;
  sortedarray: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    for(let data of this.floorData){
    this.array.push(data.price)
    }
this.sortArray(this.array)
  }
   sortArray(array:any) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
      for (var j = i; j < array.length; j++) {
        if (array[j] < array[i]) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }

    this.sortedarray=array
    console.log(this.sortedarray)
    return array;
  }



  sortByPrice(){

    console.log( this.array.sort())
  }
  floorDetails(id: any) {
    this.router.navigate(['floor-details/', id]);
  }
  onNavigateCarousel(page: { page: number }): void {
    this.navigatorPage = page.page;
  }
}
