package com.portfolio.gabriel.Repository;

import com.portfolio.gabriel.Entity.Educacion;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface REducacion extends JpaRepository<Educacion, Integer> {
    public Optional<Educacion> findByNombreEducacion(String nombreEducacion);
    public boolean existsByNombreEducacion(String NombreEducacion);
}
