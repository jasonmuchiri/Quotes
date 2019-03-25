import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountvoteComponent } from './countvote.component';

describe('CountvoteComponent', () => {
  let component: CountvoteComponent;
  let fixture: ComponentFixture<CountvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
