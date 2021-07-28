import { Routes } from '@angular/router'
import {SearchComponent} from "./components/search/search.component";
import {DetailComponent} from "./components/detail/detail.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {LayoutComponent} from "./components/layout/layout.component";

export const ROUTES: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: SearchComponent },
      { path: 'country/:nombre', component: DetailComponent },
      { path: '', redirectTo: '/countries', pathMatch: 'full' }
    ]
  },
  { path: '**', component: NotFoundComponent }
];