import {ITodo} from '../models/todo.model';
import {TODO_PUSH_ITEM} from '../actions/todo.action';

export interface ITodoState {
  list: ITodo[];
}

const initState: ITodoState = {
  list: []
};

export function todoReducer(state: ITodoState = initState, {type, payload}: {type: string, payload: any}) {
  switch (type) {
    case TODO_PUSH_ITEM:
      return {
        ...state,
        list: [...state.list, payload]
      };
    default:
      return state;
  }
}
