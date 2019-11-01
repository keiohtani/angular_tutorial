import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  
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
    console.log('deleted');
  }

  onToggle(): void{
    this.todo.completed = !this.todo.completed;
    this.todoService.toggleTodo(this.todo).subscribe(todo => console.log(todo));
  }

}
