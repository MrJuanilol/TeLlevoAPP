import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
<<<<<<< HEAD
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
