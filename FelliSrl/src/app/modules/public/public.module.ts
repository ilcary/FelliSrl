import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./homepage/homepage.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {PublicModuleRoutes} from "./public.routes";



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(PublicModuleRoutes)
  ]
})
export class PublicModule { }
