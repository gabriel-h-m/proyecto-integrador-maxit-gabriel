import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})

export class ExperienciaComponent implements OnInit {
  exp: Experiencia[] = [];

  constructor(private sExperiencia: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.exp = data; })
  }

  delete(id?: number, nombreExp?:string) {
    if(confirm("¿Está seguro de que desea eliminar el elemento '" + nombreExp + "' ?")) {
      if (id != undefined) {
        this.sExperiencia.delete(id).subscribe(
          data => {
            this.cargarExperiencia();
          }, err => {
            alert("No se pudo eliminar la experiencia");
          }
        )
      }
    }
  }
}
