import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import * as moment from "moment";

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
        labels: ['design', 'development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('10 01 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('10 01 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 2,
        title: 'Задача 2',
        priority: 'normal',
        labels: ['design'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('10 02 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('10 02 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 3,
        title: 'Задача 3',
        priority: 'high',
        labels: ['research'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('10 03 2020, 12:31:14', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('10 03 2020, 12:31:14', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 4,
        title: 'Задача 4',
        priority: 'low',
        labels: ['design', 'development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('10 04 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('10 04 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 5,
        title: 'Задача 5',
        priority: 'normal',
        labels: ['design'],
        description: '...',
        date: moment('11 01 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('11 01 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 6,
        title: 'Задача 6',
        priority: 'high',
        labels: ['research'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('11 02 2020, 12:31:14', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('11 02 2020, 12:31:14', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 7,
        title: 'Задача 7',
        priority: 'low',
        labels: ['design', 'development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('11 03 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('11 03 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 8,
        title: 'Задача 8',
        priority: 'normal',
        labels: ['design'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('11 04 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('11 04 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 9,
        title: 'Задача 9',
        priority: 'high',
        labels: ['research'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('11 05 2020, 12:31:14', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('11 05 2020, 12:31:14', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 10,
        title: 'Задача 10',
        priority: 'low',
        labels: ['design', 'development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('11 06 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('11 06 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 11,
        title: 'Задача 11',
        priority: 'normal',
        labels: ['design'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('12 01 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('12 01 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 12,
        title: 'Задача 12',
        priority: 'high',
        labels: ['research'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('12 02 2020, 12:31:14', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('12 02 2020, 12:31:14', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 13,
        title: 'Задача 13',
        priority: 'low',
        labels: ['design', 'development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('12 03 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('12 03 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 14,
        title: 'Задача 14',
        priority: 'normal',
        labels: ['design'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('12 04 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('12 04 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 15,
        title: 'Задача 15',
        priority: 'high',
        labels: ['research'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('12 05 2020, 12:31:14', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('12 05 2020, 12:31:14', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 16,
        title: 'Задача 16',
        priority: 'normal',
        labels: ['design', 'development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('12 06 2020, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('12 06 2020, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 17,
        title: 'Задача 17',
        priority: 'high',
        labels: ['design'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('01 01 2021, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('01 01 2021, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 18,
        title: 'Задача 18',
        priority: 'low',
        labels: ['research'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('01 02 2021, 12:31:14', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('01 02 2021, 12:31:14', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 19,
        title: 'Задача 19',
        priority: 'normal',
        labels: ['design', 'development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('01 03 2021, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('01 03 2021, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 20,
        title: 'Задача 20',
        priority: 'high',
        labels: ['design'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('02 01 2021, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('02 01 2021, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 21,
        title: 'Задача 21',
        priority: 'low',
        labels: ['research'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('02 02 2021, 12:31:14', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('02 02 2021, 12:31:14', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 22,
        title: 'Задача 22',
        priority: 'normal',
        labels: ['design', 'development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('02 03 2021, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('02 03 2021, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 23,
        title: 'Задача 23',
        priority: 'high',
        labels: ['design'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('02 04 2021, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('02 04 2021, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 24,
        title: 'Задача 24',
        priority: 'low',
        labels: ['research'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('02 05 2021, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('02 05 2021, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 25,
        title: 'Задача 25',
        priority: 'normal',
        labels: ['design', 'development'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('02 06 2021, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('02 06 2021, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 26,
        title: 'Задача 26',
        priority: 'high',
        labels: ['design'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('02 07 2021, 12:31', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('02 07 2021, 12:31', 'MM DD YYYY, HH:mm').unix()
      },
      {
        id: 27,
        title: 'Задача 27',
        priority: 'low',
        labels: ['research'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra porta mi, a imperdiet quam sagittis et. Nullam euismod tellus metus, maximus convallis purus tincidunt id. Nam urna ex, tincidunt ut eros ut, tempus venenatis metus. Nullam vehicula facilisis metus eget eleifend. Cras consequat tristique nisi quis consectetur. Donec ac commodo felis, sed tempus nisl. In quis dui quis nisl dignissim convallis. Mauris odio felis, molestie non posuere feugiat, fringilla at orci. Pellentesque gravida orci a aliquet finibus. Nullam facilisis purus libero, vitae varius diam suscipit ac. Integer id euismod nisi. Integer euismod quam tempus tellus ullamcorper, a placerat massa auctor. Aliquam erat volutpat. Proin volutpat lacinia neque non viverra. Etiam dictum nunc et fermentum semper. Mauris iaculis justo in neque luctus, in aliquam nunc placerat.',
        date: moment('02 08 2021, 12:31:14', 'MM DD YYYY, HH:mm').locale('ru').format('D MMMM YYYY, HH:mm'),
        timestamp: moment('02 08 2021, 12:31:14', 'MM DD YYYY, HH:mm').unix()
      }
    ];
    return {tasks}
  }
}
