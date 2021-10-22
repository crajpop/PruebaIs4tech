import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsalvadorComponent } from './elsalvador.component';

describe('ElsalvadorComponent', () => {
  let component: ElsalvadorComponent;
  let fixture: ComponentFixture<ElsalvadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElsalvadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElsalvadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
