import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsuscripcionComponent } from './formsuscripcion.component';

describe('FormsuscripcionComponent', () => {
  let component: FormsuscripcionComponent;
  let fixture: ComponentFixture<FormsuscripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsuscripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
