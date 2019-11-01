import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  setClasses(){
    const classes = { 
      completed : this.todo.completed,
    };
    return classes;
  }

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onDelete(): void{
    this.deleteTodo.emit(this.todo);
  }

  onToggle(): void{
    this.todo.completed = !this.todo.completed;
    this.todoService.toggleTodo(this.todo).subscribe(todo => console.log(todo));
  }

}
