import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostaricaComponent } from './costarica.component';

describe('CostaricaComponent', () => {
  let component: CostaricaComponent;
  let fixture: ComponentFixture<CostaricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostaricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CostaricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
