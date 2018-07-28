import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioPage } from '../usuario/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: string = "";

  constructor(public navCtrl: NavController) {

  }
  navega(){
    this.navCtrl.push(UsuarioPage);
  }
}
