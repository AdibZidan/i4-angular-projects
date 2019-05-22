import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Todo } from './../../classes/Todo';

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})

export class AddComponent implements OnInit {
  @Output() addTodo = new EventEmitter<Todo>();

  formGroup: FormGroup;
  isValidMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      completed: [false]
    });

    this.formGroup.valueChanges.subscribe(() => this.isValidMessage = this.formGroup.valid);
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      this.addTodo.emit(this.formGroup.value);
    }
  }

}