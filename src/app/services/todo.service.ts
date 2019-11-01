import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 

    })
  }

  constructor(private http:HttpClient) { }

  getTodos(limit: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + '?_limit=' + limit);
  }

  toggleTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put<Todo>(url, todo, this.httpOptions);
  }
}
