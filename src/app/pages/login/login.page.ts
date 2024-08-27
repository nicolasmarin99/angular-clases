import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  apellido: string = "rodrigez"
  edad: number = 29;
  nombre: string="nicolas"
  usuario: string = ""

  persona: any = {
    nombre: 'jose',
    apellido: 'suarez',
    edad: 23
  }

  listaP: any = [
    {
      id:24,
      comuna: 'quilicura'

    },

    {
      id:2,
      comuna: 'conchali'

    },

    {
      id:33,
      comuna: 'huechuraba'

    }
  ]

  

  constructor(private router: Router,private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert(titulo:string,msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  irPagina(){
    //creamos la variable de contexto 
    let navigationextras: NavigationExtras = {
      state: {
        ape: this.apellido,
        ed:this.edad,
        user: this.usuario
      }
    }

    this.presentAlert('soy titulo','soy mensaje');
    //Puedo crear cualquier logica de programación
    this.router.navigate(['/agregar'], navigationextras);
  }

}
