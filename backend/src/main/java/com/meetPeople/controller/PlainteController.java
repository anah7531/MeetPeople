package com.meetPeople.controller;

import com.meetPeople.entity.Plainte;
import com.meetPeople.services.PlainteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/plainte")
@CrossOrigin("*")
public class PlainteController {

    @Autowired
    private PlainteService plainteService;

    @PostMapping("/envoyerUnePlainte")
    public boolean savePlainte (@RequestBody Plainte plainte){
        return plainteService.savePlainte(plainte);
    }




}