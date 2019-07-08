import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

import { trigger, style, animate, transition, } from '@angular/animations';

import { TodoService } from '../services/todo.service';

import { Todo } from '../../classes/Todo';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ])
    ])
  ]
})

export class BodyComponent implements OnInit, OnDestroy {

  @Input() todo: Todo;

  @Output() deleteToDo: EventEmitter<Todo> = new EventEmitter<Todo>();

  private subscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void { if (this.subscription !== undefined) { this.subscription.unsubscribe(); } }

  setLineThrough(): object {
    const lineThrough: object = {
      'is-complete': this.todo.completed
    };

    return lineThrough;
  }

  onToggle(todo: Todo): void {
    todo.completed = !todo.completed;

    this.subscription = this.todoService.toggleTodoFromBackEnd(todo).subscribe(todoOnToggle => console.log(todoOnToggle));
  }

  onDelete(todo: Todo) { this.deleteToDo.emit(todo); }

  async onEdit(todo: Todo) { await this.todoService.editTodoFromBackEnd(todo).toPromise(); }

}