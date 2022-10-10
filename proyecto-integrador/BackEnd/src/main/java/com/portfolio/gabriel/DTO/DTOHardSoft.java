package com.portfolio.gabriel.DTO;

import javax.validation.constraints.NotBlank;


public class DTOHardSoft {
    @NotBlank
    private String nombre;
    @NotBlank
    private int porcentaje;

    
    public DTOHardSoft() {
    }

    public DTOHardSoft(String nombre, int porcentaje) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }
    
}
