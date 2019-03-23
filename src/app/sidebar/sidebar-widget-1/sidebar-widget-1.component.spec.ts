import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidget1Component } from './sidebar-widget-1.component';

describe('SidebarWidget1Component', () => {
  let component: SidebarWidget1Component;
  let fixture: ComponentFixture<SidebarWidget1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarWidget1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWidget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
