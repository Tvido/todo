import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from "../../services/data-handler.service";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = []

  constructor(
    private dataHandler: DataHandlerService
  ) {
  }

  ngOnInit(): void {
   this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories)
  }

  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category)
  }
}
