import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {BoardListComponent} from './components/board-list/board-list.component';
import {HomePage} from './pages/home.page';
import {AddBoardComponent} from './components/add-board/add-board.component';
import {SharedModule} from '../../shared/shared.module';
import { BoardItemComponent } from './components/board-item/board-item.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePage,
    BoardListComponent,
    AddBoardComponent,
    BoardItemComponent
  ]
})
export class HomeModule {}
