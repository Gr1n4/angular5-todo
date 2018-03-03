import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITodoModel} from '../../../../models/todo.model';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.sass']
})
export class BoardItemComponent implements OnInit {
  @Input() board: ITodoModel;
  @Output('onComplete') onComplete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

  toggleComplete() {
    this.onComplete.emit(this.board.id);
  }

}
