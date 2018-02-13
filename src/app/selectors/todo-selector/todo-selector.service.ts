import { Injectable } from '@angular/core';
import {RootState} from '../../reducers/index';
import {ITodoState} from '../../reducers/todo.reducer';
import {createSelector, Selector} from 'reselect';
import {ITodo} from '../../models/todo.model';

@Injectable()
export class TodoSelectorService {

  constructor() {}

  private getByStore(state: RootState): ITodoState {
    console.log('state -> ', state);
    return state.todo;
  }

  getList(): Selector<RootState, ITodo[]> {
    return createSelector(this.getByStore, (state: ITodoState) => state.list);
  }
}
