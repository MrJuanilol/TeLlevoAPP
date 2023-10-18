<<<<<<< HEAD
import { Component, OnInit} from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

declare var google: any; 

=======
import { Component,} from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
<<<<<<< HEAD
  nombre = localStorage.getItem('nombre');
  
  map: any;

=======
  
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
  searchQuery: string = '';
  searchbarVisible: boolean = false;
  animationCompleted: boolean = false;

<<<<<<< HEAD
  constructor(private animationCtrl: AnimationController ) {}
=======
  constructor(private animationCtrl: AnimationController) {}
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
  ionViewDidEnter(){
    this.mostrarSearchbar();
    this.mostrarLabel();
  }
<<<<<<< HEAD

  ngOnInit() {
    this.mostrarLabel();
    this.mostrarSearchbar();
    this.initMap();
  }
  
  initMap() {
    var myLatlng = new google.maps.LatLng(-33.68142157785643,-71.22594634660035);
    
    var mapOptions = {
      zoom: 16,
      center: myLatlng,
      disableDefaultUI: true

    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var marker = new google.maps.Marker({
        position: myLatlng
    });
    
    marker.setMap(map);
  }

=======
>>>>>>> 7e679b35876fddfc178fa95c0541a936c8bc38b2
  mostrarSearchbar() {
    // Configura la visibilidad como verdadera para mostrar el ion-searchbar
    this.searchbarVisible = true;

    // Obtén una referencia al ion-searchbar
    const searchbar = document.querySelector('#searchbar') as HTMLElement;

    if (searchbar) {
      // Crea una animación para desplazar el ion-searchbar desde abajo
      const animation: Animation = this.animationCtrl.create()
        .addElement(searchbar)
        .duration(600)
        
        .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
      animation.onFinish(() => {
          
          searchbar.style.transform = 'translateY(100%)'; 
          
          this.animationCompleted = true;
      });
      // Inicia la animación
      animation.play();
    }
  }
  mostrarLabel() {
    // Obtén una referencia al ion-label
    const label = document.querySelector('#saludo') as HTMLElement;

    if (label) {
      // Crea una animación para que el ion-label aparezca desde la izquierda
      const animation: Animation = this.animationCtrl.create()
        .addElement(label)
        .duration(800)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0%)')
        .fromTo('opacity', '0', '1');

      // Inicia la animación
      animation.play();
    }
  }

}



