import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarComprasComponent } from './gestionar-compras.component';

describe('GestionarComprasComponent', () => {
  let component: GestionarComprasComponent;
  let fixture: ComponentFixture<GestionarComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
