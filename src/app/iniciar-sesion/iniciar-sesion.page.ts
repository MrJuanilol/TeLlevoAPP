import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';
=======
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

<<<<<<< HEAD
  formIniciar: FormGroup;

  constructor(private router: Router, menu: MenuController, private alertController: AlertController, public fb: FormBuilder) {
    this.formIniciar = this.fb.group({
      'mail': new FormControl("", Validators.required),
      'contra': new FormControl("", Validators.required)
    })
  }
=======
  constructor() { }
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2

  ngOnInit() {
  }

<<<<<<< HEAD
  async ingresar() {
    var f = this.formIniciar.value;

    var mailUsuario = localStorage.getItem('mail');
    var contraUsuario = localStorage.getItem('contra');

    if (this.formIniciar.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });


      await alert.present();
      return;

    } else if (mailUsuario == f.mail && contraUsuario == f.contra) {
      localStorage.setItem('autentificado', 'true');
      this.router.navigate(["/inicio"])
    } else {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Datos Incorrectos',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }
  }
=======
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
}
