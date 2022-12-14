package com.meetPeople.controller;


import com.meetPeople.model.Profile;
import com.meetPeople.services.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/match")
@CrossOrigin("*")
public class MatchController {

    @Autowired
    MatchService matchService;

    @GetMapping("/{id}")
    public List<Profile> getMyMatches(@PathVariable int id){
        return matchService.getMyMatches(id);
    }
}
