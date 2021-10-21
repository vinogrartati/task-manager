import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BackButtonComponent } from "./components/back-button/back-button.component";

@NgModule({
  declarations: [
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BackButtonComponent,
  ]
})

export class SharedModule { }
