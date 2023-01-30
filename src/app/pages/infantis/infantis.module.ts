import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfantisPageRoutingModule } from './infantis-routing.module';

import { InfantisPage } from './infantis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfantisPageRoutingModule
  ],
  declarations: [InfantisPage]
})
export class InfantisPageModule {}
