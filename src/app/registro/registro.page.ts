import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, private alertController: AlertController) {
    this.formRegistro = this.fb.group({
      'mail': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
      'contra': new FormControl("", Validators.required),
      'confirContra': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }

  async registrar() {
    var f = this.formRegistro.value;

    if (this.formRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Debes ingresar todos los datos',
        buttons: ['OK']
      });

      await alert.present();
      return;

    } else if (f.contra != f.confirContra) {
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Las Contraseñas deben coincidir',
        buttons: ['OK']
      });

      await alert.present();
      return;
    } else {
      var mail = f.mail;
      var nombre = f.nombre;
      var contra = f.contra;

      localStorage.setItem('mail', mail)
      localStorage.setItem('nombre', nombre)
      localStorage.setItem('contra', contra)
      
      const alert = await this.alertController.create({
        header: 'Mensaje',
        message: 'Registrado correctamente',
        buttons: ['OK']
      });

      await alert.present();
      this.router.navigate(["/"]);

    }
  }

}
