package com.portfolio.gabriel.Service;

import com.portfolio.gabriel.Entity.Experiencia;
import com.portfolio.gabriel.Repository.RExperiencia;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
@Transactional
public class SExperiencia {
    @Autowired
    RExperiencia rExperiencia;
    
    public List<Experiencia> list() {
        return rExperiencia.findAll();
    }
    
    public Optional<Experiencia> getOne(int it) {
        return rExperiencia.findById(it);
    }
    
    public Optional<Experiencia> getByNombreExp(String nombreExp) {
        return rExperiencia.findByNombreExp(nombreExp);
    }
    
    public void save(Experiencia experiencia) {
        rExperiencia.save(experiencia);
    }
    
    public void delete(int id) {
        rExperiencia.deleteById(id);
    }

    public boolean existsById(int id) {
        return rExperiencia.existsById(id);
    }
    
    public boolean existsByNombreExp(String nombreExp) {
        return rExperiencia.existsByNombreExp(nombreExp);
    }
}
