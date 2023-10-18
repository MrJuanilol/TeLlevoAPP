import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2

import { IonicModule } from '@ionic/angular';

import { IniciarSesionPageRoutingModule } from './iniciar-sesion-routing.module';

import { IniciarSesionPage } from './iniciar-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
=======
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
    IonicModule,
    IniciarSesionPageRoutingModule
  ],
  declarations: [IniciarSesionPage]
})
export class IniciarSesionPageModule {}
