import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filterTasks'
})

export class FilterPipe implements PipeTransform {
  priorityFilterList: Array<string>
  transform(tasks: any, priorityList: Object): any {
    this.priorityFilterList = Object.entries(priorityList).filter(
      ([key, value]) => value
    )
      .map(([key, _]) => key)
   // console.log(tasks.filter((task: { priority: string; }) => this.priorityFilterList.includes(task.priority)))
    return tasks.filter((task: { priority: string; }) => this.priorityFilterList.includes(task.priority))
  }
}
