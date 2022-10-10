package com.portfolio.gabriel.Service;

import com.portfolio.gabriel.Entity.HardSoft;
import com.portfolio.gabriel.Repository.RHardSoft;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Transactional
@Service
public class SHardSoft {
    @Autowired
    RHardSoft rHS;
    
    public List<HardSoft> list() {
        return rHS.findAll();
    }
            
    public Optional<HardSoft> getOne(int id) {
        return rHS.findById(id);
    }
    
    public Optional<HardSoft> getByNombre(String nombre) {
        return rHS.findByNombre(nombre);
    }
            
    public void save(HardSoft skill) {
        rHS.save(skill);
    }
            
    public void delete(int id) {
        rHS.deleteById(id);
    }        
    
    public boolean existsById(int id) {
        return rHS.existsById(id);
    }
    
    public boolean existsByNombre(String nombre) {
        return rHS.existsByNombre(nombre);
    }
    
}
