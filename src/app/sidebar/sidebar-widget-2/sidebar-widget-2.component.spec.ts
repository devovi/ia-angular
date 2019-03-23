import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidget2Component } from './sidebar-widget-2.component';

describe('SidebarWidget2Component', () => {
  let component: SidebarWidget2Component;
  let fixture: ComponentFixture<SidebarWidget2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarWidget2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWidget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
