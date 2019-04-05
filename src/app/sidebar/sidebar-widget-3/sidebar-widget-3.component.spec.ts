import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarWidget3Component } from './sidebar-widget-3.component';

describe('SidebarWidget3Component', () => {
  let component: SidebarWidget3Component;
  let fixture: ComponentFixture<SidebarWidget3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarWidget3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWidget3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
