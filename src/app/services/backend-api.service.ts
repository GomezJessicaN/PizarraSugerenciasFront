import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  SugerenciaBackEnd, Sugerencia } from '../components/models/sugerencia';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
url = environment.backend_url + '/api/docs';
urlHapi = "https://bp4-hapi-pizarrasugerencias.herokuapp.com/api/sugerencia";

  constructor(private http: HttpClient) { }
  public nuevaSugerencia( sugerencia: SugerenciaBackEnd){
    let body = JSON.stringify(sugerencia);
    console.log(sugerencia)
    let headers = new HttpHeaders({
   "Content-Type": "application/json"
    });
    return this.http.post(this.urlHapi, body, {headers: headers})
  }
  public getSugerencia(): Observable<Sugerencia[]>{

    return this.http.get<Sugerencia[]>( this.urlHapi )
  }
}
