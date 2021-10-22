import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentroamericaComponent } from './centroamerica.component';

describe('CentroamericaComponent', () => {
  let component: CentroamericaComponent;
  let fixture: ComponentFixture<CentroamericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentroamericaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
