import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'sortTasks'
})

export class SortTasksPipe implements PipeTransform {
  transform(tasks: any, sortBy: string): any {
    if (sortBy === '') {
      return tasks;
    }
    if (sortBy === 'new') {
      return tasks.sort((a: any, b: any) => {
        return  b.timestamp - a.timestamp
      })
    }
    else {
      return tasks.sort((a: any, b: any) => {
        return a.timestamp - b.timestamp
      })
    }
  }
}
