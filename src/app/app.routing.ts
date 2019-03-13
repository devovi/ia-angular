import {Routes, RouterModule} from '@angular/router';

// import { LedMasterComponent } from './led/led/led-master.component';
import { ViewComponent } from './led/view/view.component';

import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
//   { path: 'led/create', component: LedMasterComponent },
  { path: 'led/view', component: ViewComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    useHash: false
});
