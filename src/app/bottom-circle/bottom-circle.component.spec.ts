import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCircleComponent } from './bottom-circle.component';

describe('BottomCircleComponent', () => {
  let component: BottomCircleComponent;
  let fixture: ComponentFixture<BottomCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
