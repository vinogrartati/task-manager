import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Task} from "./shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    const tasks = [
      {
        id: 1,
        title: 'Задача 1',
        priority: 'low',
        label: ['design', 'development'],
        description: 'lorem*5',
        date: Date
      },
      {
        id: 2,
        title: 'Задача 2',
        priority: 'low',
        label: [],
        description: 'lorem*5',
        date: Date
      },
      {
        id: 3,
        title: 'Задача 3',
        priority: 'low',
        label: [],
        description: 'lorem*5',
        date: Date
      }
    ];
    return {tasks}
  }
}
