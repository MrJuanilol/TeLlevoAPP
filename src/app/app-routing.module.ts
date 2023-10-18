import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AutenticadoGuard } from './guards/autenticado.guard';

=======
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: '/inicio',
=======
    redirectTo: '/iniciar-sesion',
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'contacto',
<<<<<<< HEAD
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule),
    canActivate:[AutenticadoGuard]
=======
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
  },
  {
    path: 'recup-contr',
    loadChildren: () => import('./recup-contr/recup-contr.module').then( m => m.RecupContrPageModule)
  },
  {
    path: 'inicio',
<<<<<<< HEAD
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[AutenticadoGuard]

  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
=======
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
