import { GamesNovidades } from './../model/gamesNovidades.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  url = 'http://localhost:3000/novidades';

  httpOptions = {
    headers: new HttpHeaders({
      'Contente-Type': 'application/json'
    })
  };

  constructor(
   private httpCLiente: HttpClient
  ) { }



 public getNovidades(id: number): Observable<GamesNovidades>{
   return this.httpCLiente.get<GamesNovidades>(this.url)
  }
}
