import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ITodo} from '../../../../models/todo.model';
import {TodoService} from '../../../../common/services/todo/todo.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.sass']
})
export class BoardListComponent implements OnInit {
  todos$: Observable<ITodo[]>;
  todos: ITodo[];

  constructor(
    private _todoService: TodoService
  ) {
    this.todos$ = this._todoService.getList();
    this.todos$
      .subscribe((_todos: ITodo[]) => {
        this.todos = _todos;
      });
  }

  ngOnInit() {
  }

}
