import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Bai1Module } from './bai1/bai1.module';
import { Bai2Module } from './bai2/bai2.module';
import { Bai1Component } from './bai1/bai1.component';
import { Bai2Component } from './bai2/bai2.component';

import { from } from 'rxjs';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'bai1',
    component: Bai1Component,
  },
  {
    path: 'bai2',
    component: Bai2Component,
  },
  
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    Bai1Module,
    Bai2Module
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
