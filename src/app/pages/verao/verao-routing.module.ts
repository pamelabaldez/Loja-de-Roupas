import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeraoPage } from './verao.page';

const routes: Routes = [
  {
    path: '',
    component: VeraoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeraoPageRoutingModule {}
