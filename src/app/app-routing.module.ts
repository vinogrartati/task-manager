import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {TaskPageComponent} from "./task-page/task-page.component";
import {EditPageComponent} from "./edit-page/edit-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', component: HomePageComponent},
      { path: 'task/:id', component: TaskPageComponent},
      { path: 'create', component: CreatePageComponent},
      { path: 'task/:id/edit', component: EditPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
