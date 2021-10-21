import { Component, Input } from '@angular/core';
import { Task } from "../../interfaces";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent{
  @Input() task: Task;
}
