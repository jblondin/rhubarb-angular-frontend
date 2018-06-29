import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UicmpntComponent } from './uicmpnt.component';

describe('UicmpntComponent', () => {
  let component: UicmpntComponent;
  let fixture: ComponentFixture<UicmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UicmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UicmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
