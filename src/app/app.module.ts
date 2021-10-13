import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component'
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { TaskComponent } from './shared/components/task/task.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { BackButtonComponent } from './shared/components/back-button/back-button.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {CommonModule} from "@angular/common";
import { FilterComponent } from './shared/components/filter/filter.component';
import {FilterTasksPipe} from "./shared/pipes/filter-tasks.pipe";
import {SortTasksPipe} from "./shared/pipes/sort-tasks.pipe";
import { SortingComponent } from './shared/components/sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    TaskPageComponent,
    EditPageComponent,
    TaskComponent,
    CreatePageComponent,
    BackButtonComponent,
    FilterComponent,
    FilterTasksPipe,
    SortTasksPipe,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
