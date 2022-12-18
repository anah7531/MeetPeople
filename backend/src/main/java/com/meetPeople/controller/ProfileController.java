package com.meetPeople.controller;

import com.meetPeople.entity.MatchTable;
import com.meetPeople.entity.Membre;
import com.meetPeople.model.Profile;
import com.meetPeople.repository.MatchTableRepository;
import com.meetPeople.repository.MembreRepository;
import com.meetPeople.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profile")
@CrossOrigin("*")
public class ProfileController {

    @Autowired
    ProfileService profileService;


    @GetMapping("/availableProfile/{id}")
    public List<Profile> getAvailableProfile(@PathVariable int id){
        return profileService.getAvailableProfile(id);
    }

    @GetMapping("/detailProfil/{myId}/{potentialMatchId}")
    public Profile showMatchDetailedProfile(@PathVariable int myId, @PathVariable int potentialMatchId){
        return profileService.showMatchDetailedProfile(myId, potentialMatchId);
    }



}
