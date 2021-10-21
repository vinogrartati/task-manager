import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from './app.component'
import { HomePageComponent } from './home-page/home-page.component';
import { TaskComponent } from './shared/components/task/task.component';
import { SortingComponent } from './shared/components/sorting/sorting.component';

import { FilterTasksPipe } from "./shared/pipes/filter-tasks.pipe";
import { SortTasksPipe } from "./shared/pipes/sort-tasks.pipe";

import { InMemoryDataService } from "./in-memory-data.service";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TaskComponent,
    SortingComponent,
    FilterTasksPipe,
    SortTasksPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    InfiniteScrollModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
