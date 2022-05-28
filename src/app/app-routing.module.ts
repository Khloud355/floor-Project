import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LandForSaleComponent } from './land-for-sale/land-for-sale.component';
import { MapsComponent } from './maps/maps.component';
import { PolicyComponent } from './policy/policy.component';
import { QustionsComponent } from './qustions/qustions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Qusetions', component: QustionsComponent },
  { path: 'floor-details/:id', component: DetailsComponent },
  { path: 'landForSale', component: LandForSaleComponent },
  { path: "maps", component: MapsComponent },
  { path: "policy", component: PolicyComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
