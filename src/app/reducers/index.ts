import {Params} from '@angular/router';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {storeFreeze} from 'ngrx-store-freeze';

import {ITodoState, todoReducer} from './todo.reducer';
import {environment} from '../../environments/environment';

interface RouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface RootState {
  router: RouterReducerState<RouterStateUrl>;
  todo: ITodoState;
}

export const reducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  todo: todoReducer
};

export const metaReducers: MetaReducer<RootState>[] = !environment.production ? [storeFreeze] : [];
