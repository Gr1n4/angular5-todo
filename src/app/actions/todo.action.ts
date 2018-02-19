import {Action} from '@ngrx/store';
import {ITodo} from '../models/todo.model';

const prefix = '[TODO]';

export const TODO_SET_LIST = `${prefix} Set list`;
export const TODO_PUSH_ITEM = `${prefix} Push item`;
export const TODO_TOGGLE_COMPLETE_ITEM = `${prefix} Toggle complete item`;

export class TodoSetListAction implements Action {
  readonly type = TODO_SET_LIST;
  constructor(public payload: ITodo[]) {}
}

export class TodoPushItemAction implements Action {
  readonly type = TODO_PUSH_ITEM;
  constructor(public payload: ITodo) {}
}

export class TodoToggleCompleteItemAction implements Action {
  readonly type = TODO_TOGGLE_COMPLETE_ITEM;
  constructor(public payload: number) {}
}

export type TodoAction = TodoPushItemAction | TodoToggleCompleteItemAction;
