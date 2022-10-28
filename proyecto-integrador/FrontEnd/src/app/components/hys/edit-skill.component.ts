import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css'],
  styles: [`
    :host {
        display: block;
        background-color: #152733;
    }
  `]
})

export class EditSkillComponent implements OnInit {
  skill: Skill = null;

  constructor(private sSkill: SkillService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.cargarScript("./assets/js/validarCampos.js");
    this.sSkill.detail(id).subscribe(
      data => {
        this.skill = data;
      }, err => {
        alert("Error al modificar la skill");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    if (this.skill.porcentaje != null && this.skill.porcentaje != 0) { // cambiar si da problemas

      const id = this.activatedRouter.snapshot.params['id'];
      this.sSkill.update(id, this.skill).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la skill");
          // this.router.navigate(['']);
        }
      )
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
