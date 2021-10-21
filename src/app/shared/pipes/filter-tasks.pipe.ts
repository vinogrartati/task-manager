import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filterTasks'
})

export class FilterTasksPipe implements PipeTransform {
  priorityFilterList: Array<string>;
  labelsFilterList: Array<string>;

  transform(tasks: any, priorityList: Object, labelsList: Object): any {
    this.priorityFilterList = Object.entries(priorityList)
      .filter(([key, value]) => value)
      .map(([key, _]) => key);

    this.labelsFilterList = Object.entries(labelsList)
      .filter(([key, value]) => value)
      .map(([key, _]) => key);

    if (this.priorityFilterList.length === Object.keys(priorityList).length &&
      this.labelsFilterList.length === Object.keys(labelsList).length) {
      return tasks;
    }
    return tasks
      .filter((task: { priority: string; }) => this.priorityFilterList.includes(task.priority))
      .filter((task: { labels: string[] }) => {
        const commonLabels = task.labels.filter(label => this.labelsFilterList.includes(label));
        return commonLabels.length !== 0;
      });
  }
}
