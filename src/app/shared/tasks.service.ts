import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Task} from "./interfaces";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasksUrl = 'api/tasks';
  constructor(private http: HttpClient) {
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task)
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.tasksUrl}/${id}`)
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.tasksUrl}/${id}`)
  }
}

