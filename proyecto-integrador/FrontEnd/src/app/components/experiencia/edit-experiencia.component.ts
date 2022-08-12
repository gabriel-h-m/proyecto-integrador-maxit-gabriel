import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
  styles: [`
    :host {
        display: block;
        background-color: #152733;
    }
  `]
})

export class EditExperienciaComponent implements OnInit {
  expLaboral: Experiencia = null;

  constructor(private sExperienciaService: ExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cargarScript("./assets/js/validarCampos.js");
    this.sExperienciaService.detail(id).subscribe(
      data => {
        this.expLaboral = data;
      }, err => {
        alert("Error al modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperienciaService.update(id, this.expLaboral).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la experiencia");
        // this.router.navigate(['']);
      }
    )
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
