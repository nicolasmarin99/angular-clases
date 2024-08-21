import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  apellido: string ="";
  edad!: number;
  usuario: string ="";


  constructor(private router: Router, private activerouter:ActivatedRoute) { 
    this.activerouter.queryParams.subscribe(param => {
      //valido si en la navegacion existe la variable de contexto
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['ed'];
        this.usuario = this.router.getCurrentNavigation()?.extras?.state?.['ape'];
      }
    })


  }

  ngOnInit() {
  }

}
