import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css'],
  styles: [`
    :host {
        display: block;
        background-color: #152733;
    }
  `]
})

export class NewEducacionComponent implements OnInit {
  nombreEducacion: string = '';
  descripcionEducacion: string = '';

  constructor(private sEducacion: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.cargarScript("./assets/js/validarCampos.js");
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEducacion, this.descripcionEducacion);
    this.sEducacion.save(educacion).subscribe(data => {
      alert("Educacion añadida!");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo añadir la nueva educación");
      // this.router.navigate(['']);
    })
  }

  public cargarScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement("script");
    script.innerHTML = "";
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  cancelar(): void {
    this.router.navigate(['']);
  }

}
