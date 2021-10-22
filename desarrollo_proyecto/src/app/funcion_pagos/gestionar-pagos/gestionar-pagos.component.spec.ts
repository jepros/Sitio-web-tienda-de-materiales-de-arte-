import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarPagosComponent } from './gestionar-pagos.component';

describe('GestionarPagosComponent', () => {
  let component: GestionarPagosComponent;
  let fixture: ComponentFixture<GestionarPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
