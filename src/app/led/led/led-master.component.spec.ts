import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedMasterComponent } from './led-master.component';

describe('LedMasterComponent', () => {
  let component: LedMasterComponent;
  let fixture: ComponentFixture<LedMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
