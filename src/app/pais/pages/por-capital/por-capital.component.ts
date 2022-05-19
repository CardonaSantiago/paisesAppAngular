import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {
  termino: string = ''; 
  HayError: boolean = false;
  paises : Country[] = [];
  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.HayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
    .subscribe((paises)=>{
      this.paises = paises;
      console.log(this.paises);
      
      
    },(err)=>{
      this.HayError=true;
      this.paises=[];
    });

  }

}
