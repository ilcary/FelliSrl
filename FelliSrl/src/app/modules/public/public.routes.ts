import {Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";
import {GalleryPageComponent} from "./gallery/gallery-page.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {WorkWithUsComponent} from "./work-with-us/work-with-us.component";
import {ContactsComponent} from "./contacts/contacts.component";

export const PublicModuleRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'gallery',
    component: GalleryPageComponent,
  },
  {
    path: 'chi-siamo',
    component: AboutUsComponent,
  },
  {
    path: 'lavora-con-noi',
    component: WorkWithUsComponent,
  },
  {
    path: 'contatti',
    component: ContactsComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
