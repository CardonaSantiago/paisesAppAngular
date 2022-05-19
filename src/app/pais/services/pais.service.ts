import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams(){
    return  new HttpParams().set('fields','flags,name,capital,population,subregion,cca2');
  }

  constructor(private http: HttpClient ) { }

  buscarPais(termino:string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{ params: this.httpParams});
  }
  
  buscarCapital(termino:string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{ params: this.httpParams});
  }

  getPaisPorAlpha(id:string): Observable<Country> {
    console.log(id)
    const url = `${this.apiUrl}/alpha/${id}`;
    console.log(url);
    
    return this.http.get<Country>(url);
  }

  BuscarRegion(region:string):Observable<Country[]>{
    const params = new HttpParams()
    .set('fields','flags,name,capital,population,subregion,cca2');

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{ params: this.httpParams})
    .pipe(
      tap(console.log)
    )
  }

}
