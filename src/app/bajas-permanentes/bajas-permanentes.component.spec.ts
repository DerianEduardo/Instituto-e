import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajasPermanentesComponent } from './bajas-permanentes.component';

describe('BajasPermanentesComponent', () => {
  let component: BajasPermanentesComponent;
  let fixture: ComponentFixture<BajasPermanentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajasPermanentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajasPermanentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
