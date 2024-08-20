import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  apellido: string = "rodrigez"
  nombre: string="nicolas"
  usuario: string = ""

  persona: any = {
    nombre: 'jose',
    apellido: 'suarez',
    edad: 34
  }

  listaP: any = [
    {
      id:24,
      comuna: 'quilicura'

    }
  ]

  

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irPagina(){
    //Puedo crear cualquier logica de programación
    this.router.navigate(['/agregar']);
  }

}
