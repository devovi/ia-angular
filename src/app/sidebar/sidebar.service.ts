import { Injectable, Type } from '@angular/core';
import { SidebarWidget1Component } from './sidebar-widget-1/sidebar-widget-1.component';
import { SidebarWidget2Component } from './sidebar-widget-2/sidebar-widget-2.component';
import { SidebarWidget3Component } from './sidebar-widget-3/sidebar-widget-3.component';

@Injectable()
export class SidebarService {
  widgets: { [id: string]: Type<{}> } = {
    'app-sidebar-widget-1': SidebarWidget1Component,
    'app-sidebar-widget-2': SidebarWidget2Component,
    'app-sidebar-widget-3': SidebarWidget3Component
  };
}
