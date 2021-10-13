export interface Task {
  id?: number,
  title: string,
  priority: string,
  labels: Array<string>,
  description: string,
  timestamp: number,
  date: any,
}
