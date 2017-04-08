import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { TodoItem } from './todo-item';

@Injectable()
export class TodoService {
  baseUrl = 'http://orlcc-todo.azurewebsites.net/api/v1';
  constructor(private http: Http) {
  }

  GetTodos(): Promise<TodoItem[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => {
        const r = response.json() as TodoItem[];
        return r;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
  }
}
