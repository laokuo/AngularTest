import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBootsrapComponent } from './test-bootsrap.component';

describe('TestBootsrapComponent', () => {
  let component: TestBootsrapComponent;
  let fixture: ComponentFixture<TestBootsrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBootsrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBootsrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
