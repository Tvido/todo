import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Task} from "../../models/Task";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['color', 'id', 'title', 'category', 'priority', 'date', 'status'];
  dataSource!: MatTableDataSource<Task>

  @ViewChild(MatPaginator, {static: false}) private paginator!: MatPaginator;
  @ViewChild(MatSort, {static: false}) private sort!: MatSort;

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

  ngAfterViewInit(): void {
    this.addTableObjects()
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
    this.addTableObjects()

    this.dataSource.sortingDataAccessor = (task, colName): any => {
      switch(colName) {
        case 'title': {
          return task.title
        }

        case 'category': {
          return task.category ? task.category.title : null
        }

        case 'priority': {
          return task.priority ? task.priority.id : null
        }

        case 'date': {
          return task.date ? task.date : null
        }

        case 'status': {
          return !task.completed
        }
      }
    }
  }

  private addTableObjects() {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }
}
