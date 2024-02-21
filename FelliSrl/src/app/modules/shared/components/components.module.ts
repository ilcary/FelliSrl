import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AnimatedCardComponent } from './animated-card/animated-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PageGenericHeaderComponent } from './page-generic-header/page-generic-header.component';



@NgModule({
  declarations: [
    CardComponent,
    AnimatedCardComponent,
    ProductCardComponent,
    PageGenericHeaderComponent
  ],
    exports: [
        CardComponent,
        AnimatedCardComponent,
        ProductCardComponent,
        PageGenericHeaderComponent
    ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
