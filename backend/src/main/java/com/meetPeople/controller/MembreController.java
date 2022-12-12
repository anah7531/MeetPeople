package com.meetPeople.controller;


import com.meetPeople.repository.MembreRepository;
import com.meetPeople.entity.Membre;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/membre")
public class MembreController {

    @Autowired
    MembreRepository membreRepository;


    @GetMapping("{id}")
    public Optional<Membre> show(@PathVariable int id){
        return membreRepository.findById(id);
    }

    @PostMapping()
    public Membre insertMembre(@RequestBody Membre membre){
        return membreRepository.save(membre);

    }

}
