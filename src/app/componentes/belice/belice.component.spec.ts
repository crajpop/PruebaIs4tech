import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeliceComponent } from './belice.component';

describe('BeliceComponent', () => {
  let component: BeliceComponent;
  let fixture: ComponentFixture<BeliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
