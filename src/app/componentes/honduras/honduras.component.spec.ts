import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HondurasComponent } from './honduras.component';

describe('HondurasComponent', () => {
  let component: HondurasComponent;
  let fixture: ComponentFixture<HondurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HondurasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HondurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
