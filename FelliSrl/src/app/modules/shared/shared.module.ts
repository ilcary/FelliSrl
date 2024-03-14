import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {DirectivesModule} from "./directives/directives.module";
import {ComponentsModule} from "./components/components.module";
import {FullLayoutComponent} from "./layout/full-layout/full-layout.component";
import {HeaderComponent} from "./layout/header/header.component";
import {MaterialModule} from "../../material.module";
import { FooterComponent } from './layout/footer/footer.component';
import {RouterLink, RouterLinkActive} from "@angular/router";


@NgModule({
  declarations: [FullLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule, MaterialModule, NgOptimizedImage, RouterLink, RouterLinkActive,
  ],
   exports: [CommonModule, DirectivesModule, ComponentsModule, FullLayoutComponent]
})
export class SharedModule {
}
