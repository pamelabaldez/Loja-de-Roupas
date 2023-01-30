import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfantisPage } from './infantis.page';

const routes: Routes = [
  {
    path: '',
    component: InfantisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfantisPageRoutingModule {}
