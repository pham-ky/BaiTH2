import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { Bai1Component } from './bai1.component';



@NgModule({
  exports: 
  [
    CategoryComponent,
    FooterComponent, 
    HeaderComponent, 
    MainComponent
  ],
  declarations: 
  [
    CategoryComponent,
    FooterComponent, 
    HeaderComponent, 
    MainComponent, Bai1Component
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class Bai1Module { }
