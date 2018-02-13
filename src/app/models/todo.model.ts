export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export class TodoModel implements ITodo {
  id = Date.now();
  title: string;
  completed = false;

  constructor(title: string) {
    this.title = title;
  }
}
