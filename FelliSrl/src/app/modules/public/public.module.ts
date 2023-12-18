import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HomepageComponent} from "./homepage/homepage.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {PublicModuleRoutes} from "./public.routes";
import { AboutUsComponent } from './about-us/about-us.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    HomepageComponent,
    AboutUsComponent,
    WorkWithUsComponent,
    ContactsComponent,
    GalleryComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(PublicModuleRoutes),
    NgOptimizedImage
  ]
})
export class PublicModule { }
