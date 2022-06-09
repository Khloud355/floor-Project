import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LandForSaleComponent } from './land-for-sale/land-for-sale.component';
import { MapsComponent } from './maps/maps.component';
import { PolicyComponent } from './policy/policy.component';
import { QustionsComponent } from './qustions/qustions.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  { path: 'home', component: HomeComponent },
  { path: 'FAQ', component: QustionsComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: '4Sale', component: LandForSaleComponent },
  { path: "images", component: MapsComponent },
  { path: "policy", component: PolicyComponent },
  {path: '**', component: HomeComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
