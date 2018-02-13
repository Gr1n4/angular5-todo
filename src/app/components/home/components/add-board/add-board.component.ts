import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TodoService} from '../../../../common/services/todo/todo.service';
import {TodoModel} from '../../../../models/todo.model';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.sass']
})
export class AddBoardComponent implements OnInit {
  addBoardFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _todoService: TodoService
  ) {
    this.addBoardFormGroup = this._formBuilder.group({
      boardTitle: ['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    this._todoService.pushTodoItem(new TodoModel(this.addBoardFormGroup.value.boardTitle));
  }

}
