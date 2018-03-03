import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ITodoModel} from '../../../../models/todo.model';
import {TodoService} from '../../../../common/services/todo/todo.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.sass']
})
export class BoardListComponent implements OnInit {
  todos$: Observable<ITodoModel[]>;
  todos: ITodoModel[];

  constructor(
    private _todoService: TodoService
  ) {
    this.todos$ = this._todoService.getList();
    this.todos$
      .subscribe((_todos: ITodoModel[]) => {
        this.todos = _todos;
      });
  }

  ngOnInit() {}

  onComplete(id: number) {
    this._todoService.toggleCompleteById(id);
  }

}
