import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AnimatedCardComponent } from './animated-card/animated-card.component';



@NgModule({
  declarations: [
    CardComponent,
    AnimatedCardComponent
  ],
  exports: [
    CardComponent,
    AnimatedCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
