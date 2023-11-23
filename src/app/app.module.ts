import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './inicio/detalle/detalle.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

const routes: Routes =[
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio', component: InicioComponent},
  {path:'bienvenida', component: BienvenidaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
