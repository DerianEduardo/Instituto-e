import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinscripcionesComponent } from './reinscripciones.component';

describe('ReinscripcionesComponent', () => {
  let component: ReinscripcionesComponent;
  let fixture: ComponentFixture<ReinscripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinscripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
