import { TestBed } from '@angular/core/testing';

import { RecursoCancionService } from './recurso-cancion.service';

describe('RecursoCancionService', () => {
  let service: RecursoCancionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursoCancionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
