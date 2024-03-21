import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {AnimatedCardComponent} from './animated-card/animated-card.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {PageGenericHeaderComponent} from './page-generic-header/page-generic-header.component';
import {InfoCardComponent} from './info-card/info-card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ProgressiveImgComponent } from './progressive-img/progressive-img.component';


@NgModule({
  declarations: [
    CardComponent,
    AnimatedCardComponent,
    ProductCardComponent,
    PageGenericHeaderComponent,
    InfoCardComponent,
    ProgressiveImgComponent,
  ],
  exports: [
    CardComponent,
    AnimatedCardComponent,
    ProductCardComponent,
    PageGenericHeaderComponent,
    InfoCardComponent,
    ProgressiveImgComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class ComponentsModule {
}
