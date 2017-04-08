import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { TodoItem } from './todo-item';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  todos: TodoItem[];
  constructor(private todoSvc: TodoService) {
  }

  ngOnInit(): void {
    this.todoSvc.GetTodos()
      .then(t => this.todos = t);
  }
}
