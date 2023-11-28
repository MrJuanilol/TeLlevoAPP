import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Share } from '@capacitor/share';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  cityName: string = '';
  translatedDescription: any;
  jsonData: any;
  public appPages = [
    { title: 'Iniciar Sesion', url: '/iniciar-sesion', icon: 'person-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


  constructor(public router: Router, private menu: MenuController, public httpClient: HttpClient, private geolocation: Geolocation) {
    this.fetchData();
  }

  compartirAPP() {
    Share.share({
      title: 'Compartir APP',
      url: 'https://usuario2.talleresmelipilla.cl/TeLlevo.apk',
      dialogTitle: 'Es perfecta !.'
    })
  }

  fetchData() {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.6861&lon=-71.2169&appid=8f12d732c06c59b005672534b1a0504e';
    this.httpClient.get(apiUrl).subscribe((data) => {
      this.jsonData = data;
      
      if (this.jsonData.main.temp){
        this.jsonData.main.temp = this.convertKelvinToCelsius(this.jsonData.main.temp);
      }

      if (this.jsonData.weather[0].description) {
        this.translateDescription(this.jsonData.weather[0].description);
      }
    });
  }

  convertKelvinToCelsius(tempKelvin: number): number {
    return parseFloat((tempKelvin - 273.15).toFixed(0));
  }

  translateDescription(description: string) {
    const targetLanguage = 'es'; // Cambia 'es' por el idioma de destino que desees
    const apiKey = 'AIzaSyADZFJZuypE3WpLJxw-SAK2iIzAOqqgZ0U'; // Reemplaza con tu clave de API de Google Cloud

    const translateUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      q: description,
      target: targetLanguage,
    };

    this.httpClient.post(translateUrl, body, { headers }).subscribe((response: any) => {
      this.translatedDescription = response.data.translations[0].translatedText;
    });
  }

  cerrarSesion(){
    localStorage.removeItem('autenticado');
    this.router.navigate(["/iniciar-sesion"]);
    this.menu.close();
  }


}
