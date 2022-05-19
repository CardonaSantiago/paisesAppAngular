import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = ''; 
  HayError: boolean = false;
  paises : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencias: Boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.mostrarSugerencias=false;
    this.HayError = false;
    this.termino = termino;

    this.paisService.buscarPais(this.termino)
    .subscribe((paises)=>{
      this.paises = paises;
      console.log(this.paises);
      
      
    },(err)=>{
      this.HayError=true;
      this.paises=[]; 
    });

  }
  sugerencias(termino:string){
    this.HayError=false;
    this.termino=termino;
    this.mostrarSugerencias=true;
    this.paisService.buscarPais(termino)
    .subscribe(paises=>this.paisesSugeridos = paises.splice(0,3),
    (err)=>this.paisesSugeridos=[]);
    
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }

  

}
