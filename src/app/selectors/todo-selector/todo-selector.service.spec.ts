import { TestBed, inject } from '@angular/core/testing';

import { TodoSelectorService } from './todo-selector.service';

describe('TodoSelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoSelectorService]
    });
  });

  it('should be created', inject([TodoSelectorService], (service: TodoSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
