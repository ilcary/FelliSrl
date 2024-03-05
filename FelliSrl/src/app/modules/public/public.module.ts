import {NgModule} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {HomepageComponent} from "./homepage/homepage.component";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {PublicModuleRoutes} from "./public.routes";
import {AboutUsComponent} from './about-us/about-us.component';
import {WorkWithUsComponent} from './work-with-us/work-with-us.component';
import {ContactsComponent} from './contacts/contacts.component';
import {GalleryComponent, GalleryImageDef} from "ng-gallery";
import {GalleryPageComponent} from "./gallery/gallery-page.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HomepageComponent,
    AboutUsComponent,
    WorkWithUsComponent,
    GalleryPageComponent,
    ContactsComponent,
  ],
    imports: [
        SharedModule,
        RouterModule.forChild(PublicModuleRoutes),
        NgOptimizedImage,
        GalleryComponent,
        GalleryImageDef,
        MatIconModule
    ]
})
export class PublicModule { }
