import {ITodoModel, TodoModel} from '../models/todo.model';
import {TODO_TOGGLE_COMPLETE_ITEM, TODO_PUSH_ITEM, TodoAction} from '../actions/todo.action';

export interface ITodoState {
  list: ITodoModel[];
}

const initState: ITodoState = {
  list: []
};

export function todoReducer(state: ITodoState = initState, {type, payload}: TodoAction): ITodoState {
  switch (type) {
    case TODO_PUSH_ITEM:
      return {
        ...state,
        list: [...state.list, payload as ITodoModel]
      };

    case TODO_TOGGLE_COMPLETE_ITEM:
      return {
        ...state,
        list: state.list.map((_todo: ITodoModel) => _todo.id === (payload as number) ? {..._todo, completed: !_todo.completed} : {..._todo})
      };
    default:
      return state;
  }
}
