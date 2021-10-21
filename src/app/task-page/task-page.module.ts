import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { TaskPageComponent } from "./task-page.component";

@NgModule({
  declarations: [
    TaskPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: TaskPageComponent }
    ])
  ],
  exports: [RouterModule]
})

export class TaskPageModule {

}
