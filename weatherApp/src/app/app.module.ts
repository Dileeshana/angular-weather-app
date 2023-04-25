import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './Container/container.component';
import { UpperBoxComponent } from './upper-box/upper-box.component';
import { LowerBoxComponent } from './lower-box/lower-box.component';
import { MoreInfoComponent } from './more-info/more-info.component'

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    UpperBoxComponent,
    LowerBoxComponent,
    MoreInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
