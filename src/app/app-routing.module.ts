import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { QustionsComponent } from './qustions/qustions.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
{ path: 'Qusetions', component: QustionsComponent },
{path: 'floor-details/:id', component: DetailsComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
