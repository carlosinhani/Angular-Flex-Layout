import { GamesClassicos } from './../../../shared/model/gamesClassicos.model';
import { GamesAtuais } from './../../../shared/model/gamesAtuais.model';
import { GamesNovidades } from './../../../shared/model/gamesNovidades.model';
import { Component, OnInit } from '@angular/core';
import { GamesServiceNovidades } from 'src/app/shared/service/gamesServiceNovidades.service';

@Component({
  selector: 'app-cadastro-list',
  templateUrl: './cadastro-list.component.html',
  styleUrls: ['./cadastro-list.component.scss']
})
export class CadastroListComponent implements OnInit {

  public jogosNovos: GamesNovidades[];
  public jogosAtuais: GamesAtuais[];
  public jogosClassicos: GamesClassicos[];

  constructor(
    public gamesNovAtuCLass: GamesServiceNovidades,
  ) { }

  ngOnInit(): void {
    this.getjogosNovos();
    this.getjogosAtuais();
    this.getjogosClassicos();
  }

  getjogosNovos(){
    this.gamesNovAtuCLass.getNovidades().subscribe(
      response => {
         this.jogosNovos = response;
         console.log(this.jogosNovos);
      });
  }

  getjogosAtuais(){
    this.gamesNovAtuCLass.getAtuais().subscribe(
      response => {
         this.jogosAtuais = response;
         console.log(this.jogosAtuais);
      });
  }

  getjogosClassicos(){
    this.gamesNovAtuCLass.getClassicos().subscribe(
      response => {
         this.jogosClassicos = response;
         console.log(this.jogosClassicos);
      });
  }

}



