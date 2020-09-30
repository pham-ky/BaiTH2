import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { Bai2Component } from './bai2.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  exports:
  [
    FooterComponent, 
    HeaderComponent, 
    SlideshowComponent, 
    CategoryComponent
  ],
  declarations: 
  [
    FooterComponent, 
    HeaderComponent, 
    SlideshowComponent, 
    Bai2Component, 
    CategoryComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class Bai2Module { }
