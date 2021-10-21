import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {TaskPageComponent} from "./task-page/task-page.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: HomePageComponent},
      { path: 'task/:id', loadChildren: () => import('./task-page/task-page.module')
          .then(m => m.TaskPageModule)},
      { path: 'create', loadChildren: () => import('./create-page/create-page.module')
          .then(m => m.CreatePageModule)},
      { path: 'task/:id/edit', loadChildren: () => import('./edit-page/edit-page.module')
          .then(m => m.EditPageModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
