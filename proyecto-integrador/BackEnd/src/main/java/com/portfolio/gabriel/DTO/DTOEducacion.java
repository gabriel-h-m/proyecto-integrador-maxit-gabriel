package com.portfolio.gabriel.DTO;

import javax.validation.constraints.NotBlank;


public class DTOEducacion {
    @NotBlank
    private String nombreEducacion;
    
    @NotBlank
    private String descripcionEducacion;

    
    public DTOEducacion() {
    }

    public DTOEducacion(String nombreEducacion, String descripcionEducacion) {
        this.nombreEducacion = nombreEducacion;
        this.descripcionEducacion = descripcionEducacion;
    }

    public String getNombreEducacion() {
        return nombreEducacion;
    }

    public void setNombreEducacion(String nombreEducacion) {
        this.nombreEducacion = nombreEducacion;
    }

    public String getDescripcionEducacion() {
        return descripcionEducacion;
    }

    public void setDescripcionEducacion(String descripcionEducacion) {
        this.descripcionEducacion = descripcionEducacion;
    }

}
