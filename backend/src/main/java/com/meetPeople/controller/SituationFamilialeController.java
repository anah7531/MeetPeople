package com.meetPeople.controller;

import com.meetPeople.models.SituationFamiliale;
import com.meetPeople.repository.SituationFamilialeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/situationFamiliale")
public class SituationFamilialeController {

    @Autowired
    SituationFamilialeRepository repository;

    @GetMapping
    public List<SituationFamiliale> getAll(){
        return repository.findAll();
    }
}
