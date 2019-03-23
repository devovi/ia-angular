import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarWidget1Component } from './sidebar-widget-1/sidebar-widget-1.component';
import { SidebarWidget2Component } from './sidebar-widget-2/sidebar-widget-2.component';
import { SidebarWidget3Component } from './sidebar-widget-3/sidebar-widget-3.component';
import { SidebarService } from './sidebar.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SidebarWidget1Component,
    SidebarWidget2Component,
    SidebarWidget3Component
  ],
  entryComponents: [
    SidebarWidget1Component,
    SidebarWidget2Component,
    SidebarWidget3Component
  ],
  providers: [SidebarService]
})
export class SidebarModule {}
