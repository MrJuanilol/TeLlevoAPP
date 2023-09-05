import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecupContrPageRoutingModule } from './recup-contr-routing.module';

import { RecupContrPage } from './recup-contr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecupContrPageRoutingModule
  ],
  declarations: [RecupContrPage]
})
export class RecupContrPageModule {}
