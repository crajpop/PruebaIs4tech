import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuatemalaComponent } from './guatemala.component';

describe('GuatemalaComponent', () => {
  let component: GuatemalaComponent;
  let fixture: ComponentFixture<GuatemalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuatemalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuatemalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
