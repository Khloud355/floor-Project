import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QustionsComponent } from './qustions/qustions.component';
import { DetailsComponent } from './details/details.component';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "primeng/carousel";
import {AccordionModule} from 'primeng/accordion';
import { LandForSaleComponent } from './land-for-sale/land-for-sale.component';
import { MapsComponent } from './maps/maps.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QustionsComponent,
    DetailsComponent,
    LandForSaleComponent,
    MapsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    BrowserAnimationsModule,
    CarouselModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
