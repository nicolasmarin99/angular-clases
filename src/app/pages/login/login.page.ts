import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


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

  

  constructor(private router: Router) { }

  ngOnInit() {
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
    //Puedo crear cualquier logica de programación
    this.router.navigate(['/agregar'], navigationextras);
  }

}
