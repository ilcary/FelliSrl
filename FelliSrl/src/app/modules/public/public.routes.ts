import {Routes} from "@angular/router";
import {HomepageComponent} from "./homepage/homepage.component";

export const PublicModuleRoutes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'home',
    component: HomepageComponent,
  }
]
