import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
  styles: [`
    :host {
        display: block;
        background-color: #152733;
    }
  `]
})

export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number = null; // cambiar si da problemas

  constructor(private sSkill: SkillService, private router: Router) { }

  ngOnInit(): void {
    this.cargarScript("./assets/js/validarCampos.js");
  }

  onCreate(): void {
    if (this.porcentaje != null && this.porcentaje != 0) { // cambiar si da problemas

      const skill = new Skill(this.nombre, this.porcentaje);
      this.sSkill.save(skill).subscribe(
        data => {
          alert("Skill añadida!");
          this.router.navigate(['']);
        }, err => {
          alert("No se pudo añadir la nueva skill");
          // this.router.navigate(['']);
        })

    }
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
