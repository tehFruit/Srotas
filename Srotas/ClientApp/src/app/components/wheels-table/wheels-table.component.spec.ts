import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelsTableComponent } from './wheels-table.component';

describe('WheelsTableComponent', () => {
  let component: WheelsTableComponent;
  let fixture: ComponentFixture<WheelsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
