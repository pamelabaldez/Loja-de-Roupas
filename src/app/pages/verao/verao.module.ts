import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeraoPageRoutingModule } from './verao-routing.module';

import { VeraoPage } from './verao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeraoPageRoutingModule
  ],
  declarations: [VeraoPage]
})
export class VeraoPageModule {}
