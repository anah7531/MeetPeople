package com.meetPeople.controller;


import com.meetPeople.entity.MatchTable;
import com.meetPeople.model.Profile;
import com.meetPeople.services.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/match")
@CrossOrigin(origins = "*")
public class MatchController {

    @Autowired
    MatchService matchService;

    @GetMapping("/{id}")
    public List<Profile> getMyMatches(@PathVariable int id){
        return matchService.getMyMatches(id);
    }

    @PostMapping
    public Map onClickForLikeOrNot(@RequestBody MatchTable matchTable){
        return matchService.onClickForLikeOrNot(matchTable);
    }

    @GetMapping("/isMatch/{id}/{otherId}")
    public boolean isMatch(@PathVariable int id, @PathVariable int otherId){
        return  matchService.isMatch(id, otherId);
    }


}
