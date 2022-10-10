package com.portfolio.gabriel.Repository;

import com.portfolio.gabriel.Entity.HardSoft;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;


public interface RHardSoft extends JpaRepository<HardSoft, Integer> {
    Optional<HardSoft> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}
