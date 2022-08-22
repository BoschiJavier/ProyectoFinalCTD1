package com.dh.digitalbooking.controller;

import com.dh.digitalbooking.model.Categoria;
import com.dh.digitalbooking.model.Ciudad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.dh.digitalbooking.service.CiudadService;

import java.util.List;

@RestController
@RequestMapping("/ciudades")
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;

    @PostMapping
    public ResponseEntity<Ciudad> agregarCategoria(@RequestBody Ciudad ciudad){
        return ResponseEntity.ok(ciudadService.agregarCiudad(ciudad));
    }

    @GetMapping("/{id}")
    public Ciudad traerCiudad(@PathVariable("id")  Long id){
        return ciudadService.buscarPorId(id);

    }

    @GetMapping("/listaCiudades")
    protected List<Ciudad> listaCiudad(){
       List<Ciudad> ciudades = ciudadService.listarCiudades();
       return ciudades;

    }


}
