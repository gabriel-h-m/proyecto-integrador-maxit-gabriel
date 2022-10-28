package com.portfolio.gabriel.Controller;

import com.portfolio.gabriel.DTO.DTOHardSoft;
import com.portfolio.gabriel.Entity.HardSoft;
import com.portfolio.gabriel.Security.Controller.Mensaje;
import com.portfolio.gabriel.Service.SHardSoft;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/skill")
@CrossOrigin(origins = {"https://frontend--gabriel.web.app", "http://localhost:4200"})
public class CHardSoft {

    @Autowired
    SHardSoft sHS;

    @GetMapping("/lista")
    public ResponseEntity<List<HardSoft>> list() {
        List<HardSoft> list = sHS.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<HardSoft> getById(@PathVariable("id") int id) {
        if (!sHS.existsById(id)) {
            return new ResponseEntity(new Mensaje("El id no existe"), HttpStatus.NOT_FOUND);
        }

        HardSoft skill = sHS.getOne(id).get();
        return new ResponseEntity(skill, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") int id) {
        if (!sHS.existsById(id)) {
            return new ResponseEntity(new Mensaje("El id no existe"), HttpStatus.NOT_FOUND);
        }

        sHS.delete(id);
        return new ResponseEntity(new Mensaje("Skill eliminada"), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody DTOHardSoft dtoHardSoft) {
        if (sHS.existsByNombre(dtoHardSoft.getNombre())) {
            return new ResponseEntity(new Mensaje("Esa skill ya existe"), HttpStatus.BAD_REQUEST);
        }
        
        if (StringUtils.isBlank(dtoHardSoft.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        
        if (StringUtils.isBlank(Integer.toString(dtoHardSoft.getPorcentaje()))) {
            return new ResponseEntity(new Mensaje("El porcentaje es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        HardSoft skill = new HardSoft(dtoHardSoft.getNombre(), dtoHardSoft.getPorcentaje());
        sHS.save(skill);

        return new ResponseEntity(new Mensaje("Skill creada con éxito!"), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody DTOHardSoft dtoHardSoft) {
        if (!sHS.existsById(id)) {
            return new ResponseEntity(new Mensaje("El id no existe"), HttpStatus.NOT_FOUND);
        }

        if (sHS.existsByNombre(dtoHardSoft.getNombre()) && sHS.getByNombre(dtoHardSoft.getNombre()).get().getId() != id) {
            return new ResponseEntity(new Mensaje("Esa skill ya existe"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(dtoHardSoft.getNombre())) {
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        if (StringUtils.isBlank(Integer.toString(dtoHardSoft.getPorcentaje()))) {
            return new ResponseEntity(new Mensaje("El porcentaje es obligatorio"), HttpStatus.BAD_REQUEST);
        }

        HardSoft skill = sHS.getOne(id).get();
        skill.setNombre(dtoHardSoft.getNombre());
        skill.setPorcentaje(dtoHardSoft.getPorcentaje());

        sHS.save(skill);

        return new ResponseEntity(new Mensaje("Skill actualizada con exito!"), HttpStatus.OK);
    }

}
