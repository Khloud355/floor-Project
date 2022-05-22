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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QustionsComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PanelModule,
    BrowserAnimationsModule,
    CarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
