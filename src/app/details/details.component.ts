import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  floorId = 1
  floorDetaila:any
  details = []
  data: any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
   this.floorDetaila={
  1:[{
    "distance":"50","basin_num":"2","gate_num":"2","dimensions":"20 * 30","google":"link","october":"متاح","descion":"متاح","licenses":"متاح",
    "meter_price":"300", "cash":"كاش", "sell":"بيع فقط", "mobile":"01062555555"
  }],
  2:[{
    "distance":"100","basin_num":"3","gate_num":"2","dimensions":"20 * 30","google":"link","october":" غير متاح ","descion":"متاح","licenses":"متاح",
    "meter_price":"300", "cash":"كاش", "sell":"بيع فقط", "mobile":"01062555555"
  }],
  3:[{
    "distance":"200","basin_num":"4","gate_num":"2","dimensions":"20 * 30","google":"link","october":"غير متاح","descion":"متاح","licenses":"متاح",
    "meter_price":"300", "cash":"كاش", "sell":"مستعد للشراكة", "mobile":"01062555555"
  }],
  4:[{
    "distance":"210","basin_num":"5","gate_num":"2","dimensions":"20 * 30","google":"link","october":"غير متاح","descion":"متاح","licenses":"متاح",
    "meter_price":"300", "cash":"كاش", "sell":"بيع فقط", "mobile":"01062555555"
  }],
    }
    this.route.params.subscribe((params: any) => {
      this.floorId = params.id
    })
    this.getDetails(this.floorId)
  }
  getDetails(key:any) {
   this.details = this.floorDetaila[key]
   this.data =this.details[0]
    console.log(this.data,"kk")
  }
}
