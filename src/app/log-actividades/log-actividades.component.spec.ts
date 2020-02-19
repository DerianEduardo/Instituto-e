import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogActividadesComponent } from './log-actividades.component';

describe('LogActividadesComponent', () => {
  let component: LogActividadesComponent;
  let fixture: ComponentFixture<LogActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
