import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'sortTasks'
})

export class SortTasksPipe implements PipeTransform {
  transform(tasks: any, sortBy: string | null): any {
    if (sortBy === 'new') {
      return tasks.sort((a: any, b: any) => b.timestamp - a.timestamp);
    }
    return tasks.sort((a: any, b: any) => a.timestamp - b.timestamp);
  }
}
