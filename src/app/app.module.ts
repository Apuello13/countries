import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Components
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
//Modules
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import {ROUTES} from "./app.routing";
import { LayoutComponent } from './components/layout/layout.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    DetailComponent,
    NotFoundComponent,
    LayoutComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
