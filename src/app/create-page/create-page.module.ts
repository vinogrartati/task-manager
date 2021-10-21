import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CreatePageComponent } from "./create-page.component";

@NgModule({
  declarations: [
    CreatePageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: CreatePageComponent }
    ]),
  ],
  exports: [RouterModule]
})

export class CreatePageModule { }
