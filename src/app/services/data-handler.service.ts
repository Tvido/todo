import {Injectable} from '@angular/core';
import {TestData} from "../data/TestData";
import {Category} from "../models/Category";
import {Task} from "../models/Task";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks)
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories)

  constructor() {
    this.fillTasks()
  }

  fillTasks() {
    this.tasksSubject.next(TestData.tasks)
  }

  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category)
    this.tasksSubject.next(tasks)
  }
}
