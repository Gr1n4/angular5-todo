import { Injectable } from '@angular/core';
import {ITodoModel} from '../../../models/todo.model';
import {Store} from '@ngrx/store';
import {RootState} from '../../../reducers/index';
import {TodoPushItemAction, TodoToggleCompleteItemAction} from "../../../actions/todo.action";
import {Observable} from 'rxjs/Observable';
import {TodoSelectorService} from '../../../selectors/todo-selector/todo-selector.service';

@Injectable()
export class TodoService {

  constructor(
    private _todoSelector: TodoSelectorService,
    private _store: Store<RootState>
  ) {}

  pushTodoItem(todo: ITodoModel) {
    this._store.dispatch(new TodoPushItemAction(todo));
  }

  getList(): Observable<ITodoModel[]> {
    return this._store.select(this._todoSelector.getList());
  }

  toggleCompleteById(id: number) {
    this._store.dispatch(new TodoToggleCompleteItemAction(id));
  }

}
