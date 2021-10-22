import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicaraguaComponent } from './nicaragua.component';

describe('NicaraguaComponent', () => {
  let component: NicaraguaComponent;
  let fixture: ComponentFixture<NicaraguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicaraguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicaraguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
