package com.meetPeople.controller;

import com.meetPeople.models.Membre;
import com.meetPeople.repository.MembreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    MembreRepository membreRepository;

    @PostMapping("/register")
    public Membre register(@RequestBody Membre membre){
        return membreRepository.save(membre);
    }

}
