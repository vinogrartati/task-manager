import { Component } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html'
})
export class SortingComponent {
  sortBy: any = localStorage.getItem('sortBy') === null ? 'new' : localStorage.getItem('sortBy');

  saveSort() {
    localStorage.setItem('sortBy', String(this.sortBy));
  }
}
