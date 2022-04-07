import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Task} from "../../models/Task";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  displayedColumns: string[] = ['color', 'id', 'title', 'category', 'priority', 'date'];
  dataSource!: MatTableDataSource<Task>

  tasks: Task[] = []

  constructor(
    private dataHandler: DataHandlerService
  ) {
  }

  ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks)
    this.dataSource = new MatTableDataSource()

    this.refreshTable()
  }

  toggleTaskComplete(task: Task) {
    task.completed = !task.completed
  }

  getPriorityColor(task: Task) {
    if(task.completed) {
      return '#f5f5f5'
    }

    if(task.priority && task.priority.color) {
      return task.priority.color
    }
    return '#fff'
  }

  private refreshTable() {
    this.dataSource.data = this.tasks
  }
}
