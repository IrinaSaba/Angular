import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterAPIComponent } from './filter-api/filter-api.component';
import { SelectNameComponent } from './select-name/select-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterAPIComponent,
    SelectNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
