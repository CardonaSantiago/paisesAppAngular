import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

/*
  subregiones: string[] = [
    'north america', 'south america', 'central america', 'caribbean', 
    'southern asia', 'western asia', 'central asia', 'south-eastern asia', 'eastern asia', 
    'eastern europe', 'central europe', 'northern europe', 'southern europe', 'southeast europe', 'western europe', 
    'southern africa', 'eastern africa', 'western africa', 'middle africa', 'northern africa', 
    'polynesia', 'australia and new zealand', 'melanesia', 'micronesia'
  ]
  */

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
  button{
    margin-right: 5px;
  }
  `
  ]
})
export class PorRegionComponent {

  regiones: string[]=['africa', 'americas', 'asia', 'europe', 'oceania'];

  
  regionActiva: string = '';
  paises: Country[]=[];

  constructor(private paisService: PaisService) { }

  getClaseCSS( region:string): string{
    return (region === this.regionActiva) 
    ? 'btn btn-primary'
    : 'btn btn-outline-primary';
  }

  activarRegion( region: string){

    if (region === this.regionActiva){ return; }
    this.regionActiva = region;
    this.paises = [];

    // TODO hacer el llamado al servicio
    this.paisService.BuscarRegion(region)
    .subscribe((paises)=>{
      this.paises = paises;
    })

  }

}
