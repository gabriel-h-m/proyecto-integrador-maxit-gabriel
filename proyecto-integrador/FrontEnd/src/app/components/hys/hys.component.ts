import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skill: Skill[] = [];

  constructor(private sSkill: SkillService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill();

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill(): void {
    this.sSkill.lista().subscribe(data => { this.skill = data; })
  }

  delete(id: number, nombreSkill: string) {
    if(confirm("¿Está seguro de que desea eliminar el elemento '" + nombreSkill + "' ?")) {
      if(id != undefined) {
        this.sSkill.delete(id).subscribe(
          data => {
            this.cargarSkill();
          }, err => {
            alert("No se pudo eliminar la skill");
          }
        )
      }
    }
  }

}
