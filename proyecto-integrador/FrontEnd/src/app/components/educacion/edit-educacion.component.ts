import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css'],
  styles: [`
    :host {
        display: block;
        background-color: #152733;
    }
  `]
})

export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(private sEducacionService: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cargarScript("./assets/js/validarCampos.js");
    this.sEducacionService.detail(id).subscribe(
      data => {
        this.educacion = data;
      }, err => {
        alert("Error al modificar la educación");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacionService.update(id, this.educacion).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educación");
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
