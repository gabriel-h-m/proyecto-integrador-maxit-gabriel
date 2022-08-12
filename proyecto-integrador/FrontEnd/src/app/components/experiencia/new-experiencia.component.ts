import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css'],
  styles: [`
    :host {
        display: block;
        background-color: #152733;
    }
  `]
})

export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';

  constructor(private sExperiencia: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
    this.cargarScript("./assets/js/validarCampos.js");
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreExp, this.descripcionExp);
    this.sExperiencia.save(exp).subscribe(data => {
      alert("Experiencia añadida!");
      this.router.navigate(['']);
    }, err => {
      alert("No se pudo añadir la nueva experiencia");
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
