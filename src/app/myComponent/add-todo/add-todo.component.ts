import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title: string | undefined;
  description: string | undefined;

  @Output() Todoadd: EventEmitter<Todo> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo={
      sno: 1,
      title:this.title,
      description:this.description,
      active: true
    };
    this.Todoadd.emit(todo);
  }
}
