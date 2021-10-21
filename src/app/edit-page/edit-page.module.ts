import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { EditPageComponent } from "./edit-page.component";

@NgModule({
  declarations: [
    EditPageComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: EditPageComponent }
    ]),
  ],
  exports: [RouterModule]
})

export class EditPageModule {

}
