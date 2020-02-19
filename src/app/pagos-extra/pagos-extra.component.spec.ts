import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosExtraComponent } from './pagos-extra.component';

describe('PagosExtraComponent', () => {
  let component: PagosExtraComponent;
  let fixture: ComponentFixture<PagosExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
