import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {TodoService} from './services/todo/todo.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [],
  providers: [
    TodoService
  ]
})
export class AppCommonModule { }
