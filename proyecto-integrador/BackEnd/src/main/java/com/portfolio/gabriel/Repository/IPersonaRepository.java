package com.portfolio.gabriel.Repository;

import com.portfolio.gabriel.Entity.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IPersonaRepository extends JpaRepository<Persona, Long> {
    
    
    
    
}
