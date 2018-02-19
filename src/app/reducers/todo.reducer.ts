import {ITodo, TodoModel} from '../models/todo.model';
import {TODO_TOGGLE_COMPLETE_ITEM, TODO_PUSH_ITEM, TodoAction} from "../actions/todo.action";

export interface ITodoState {
  list: ITodo[];
}

const initState: ITodoState = {
  list: []
};

export function todoReducer(state: ITodoState = initState, {type, payload}: TodoAction): ITodoState {
  switch (type) {
    case TODO_PUSH_ITEM:
      return {
        ...state,
        list: [...state.list, payload as ITodo]
      };

    case TODO_TOGGLE_COMPLETE_ITEM:
      return {
        ...state,
        list: state.list.map((_todo: ITodo) => _todo.id === (payload as number) ? {..._todo, completed: !_todo.completed} : {..._todo})
      };
    default:
      return state;
  }
}
