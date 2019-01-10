import { Component } from '@angular/core';
import { BackendApiService } from '../../services/backend-api.service';
import { Sugerencia, SugerenciaBackEnd } from '../models/sugerencia';



@Component({
  selector: 'app-pizarra',
  templateUrl: './pizarra.component.html',
})
export class PizarraComponent {
 public sugerencianueva: Sugerencia = new Sugerencia();
 public sugerenciasexistentes: Sugerencia[] = [];

    constructor(public backendApiService: BackendApiService) {
      this.mostrar()
    }

    public pizarraService: BackendApiService

agregar(){
  this.agregarRegistroBd()
  this.verSugerenciaNueva()
  this.colorRandom(this.sugerencianueva)
  this.limpiarCampos()
}
agregarRegistroBd(){
  var sugerenciaBack = new SugerenciaBackEnd()
  sugerenciaBack.descripcion = this.sugerencianueva.descripcion
  this.backendApiService.nuevaSugerencia( sugerenciaBack ).subscribe()
}
verSugerenciaNueva(){
  this.sugerenciasexistentes.push(this.sugerencianueva);
}
 colorRandom(sug){
  const colorList = ['#5c6bc0','#ab47bc', '#42a5f5','#26c6da', '#66bb6a', '#d4e157', '#ffca28', '#ff7043' ]
  sug.color = colorList[Math.round(Math.random()* (7 - 0) + 0)]
}
  limpiarCampos(){
  this.sugerencianueva = new Sugerencia()
    }

  mostrar(){
this.backendApiService.getSugerencia().subscribe(
 sugerencias =>{
 this.sugerenciasexistentes = sugerencias
 for ( var i = 0; i < this.sugerenciasexistentes.length; i= i+1){
   var sugerencia = this.sugerenciasexistentes[i]
   this.colorRandom(sugerencia)
 }
 }
)
   }
  }


