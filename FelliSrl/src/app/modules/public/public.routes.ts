import {Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";

export const PublicModuleRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]
