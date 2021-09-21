import { GamesNovidades } from '../model/gamesNovidades.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GamesAtuais } from '../model/gamesAtuais.model';
import { GamesClassicos } from '../model/gamesClassicos.model';

@Injectable({
  providedIn: 'root'
})
export class GamesServiceNovidades {

  urlNov = 'http://localhost:3000/novidades';
  urlAtu = 'http://localhost:3000/atuais';
  urlClass = 'http://localhost:3000/classicos';

  httpOptions = {
    headers: new HttpHeaders({
      'Contente-Type': 'application/json'
    })
  };

  constructor(
   private httpCLiente: HttpClient
  ) { }



 public getNovidades(): Observable<GamesNovidades[]>{
   return this.httpCLiente.get<GamesNovidades[]>(this.urlNov)
  }

  public getAtuais(): Observable<GamesAtuais[]>{
    return this.httpCLiente.get<GamesAtuais[]>(this.urlAtu)
   }

   public getClassicos(): Observable<GamesClassicos[]>{
    return this.httpCLiente.get<GamesClassicos[]>(this.urlClass)
   }
}
