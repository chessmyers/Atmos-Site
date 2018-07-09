import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCircleComponent } from './top-circle.component';

describe('TopCircleComponent', () => {
  let component: TopCircleComponent;
  let fixture: ComponentFixture<TopCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
