import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DirectivesModule} from "./directives/directives.module";
import {ComponentsModule} from "./components/components.module";
import {FullLayoutComponent} from "./layout/full-layout/full-layout.component";
import {HeaderComponent} from "./layout/header/header.component";


@NgModule({
  declarations: [FullLayoutComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [DirectivesModule, ComponentsModule, FullLayoutComponent]
})
export class SharedModule {
}
