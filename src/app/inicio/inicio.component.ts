import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  empezar: boolean = false;
  tiempoXimagen: number = 0;
  tiempoTotal: number = 0;
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  fnEmpezar(){
    this.empezar=true;
  }
}
