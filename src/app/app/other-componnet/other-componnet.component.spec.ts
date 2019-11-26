import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherComponnetComponent } from './other-componnet.component';

describe('OtherComponnetComponent', () => {
  let component: OtherComponnetComponent;
  let fixture: ComponentFixture<OtherComponnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherComponnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherComponnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
