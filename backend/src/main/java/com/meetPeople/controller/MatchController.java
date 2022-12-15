package com.meetPeople.controller;


import com.meetPeople.entity.MatchTable;
import com.meetPeople.model.Profile;
import com.meetPeople.repository.MatchTableRepository;
import com.meetPeople.services.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.Collections;
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

    @GetMapping("/srchPrevLikeBetween2Mems/{idMembreInitiateur}/{idMembreSecond}")
    public List<MatchTable> srchPrevLikeBetween2Mems(@PathVariable int idMembreInitiateur,@PathVariable int idMembreSecond){
        return matchService.srchPrevLikeBetween2MemsService(idMembreInitiateur,idMembreSecond);
    }

    @PutMapping("/updateMatch/{idMembreInitiateur}/{idMembreSecond}/{estAimerParInitiateur}")
    public Integer updateMatch(@PathVariable int idMembreInitiateur,@PathVariable int idMembreSecond,@PathVariable Boolean estAimerParInitiateur){

        if(matchService.updateMatchInitiateur(idMembreInitiateur, idMembreSecond, estAimerParInitiateur) == 1 &&
                matchService.updateMatchSecond(idMembreInitiateur, idMembreSecond, estAimerParInitiateur) == 1  )
            return 1;

        else return 0;
    }
    @PostMapping("/insertLike/{idMembreInitiateur}/{idMembreSecond}/{estAimerParInitiateur}")
    public Integer insertLike(@PathVariable int idMembreInitiateur,@PathVariable int idMembreSecond,@PathVariable Boolean estAimerParInitiateur){

        return matchService.insertLike(idMembreInitiateur, idMembreSecond, estAimerParInitiateur);

    }

    @PostMapping("/onClickForLikeOrNot/{idMembreInitiateur}/{idMembreSecond}/{estAimerParInitiateur}")
    public Integer onClickForLikeOrNot(@PathVariable int idMembreInitiateur,@PathVariable int idMembreSecond, @PathVariable Boolean estAimerParInitiateur){
        return matchService.onClickForLikeOrNot(idMembreInitiateur,idMembreSecond, estAimerParInitiateur);
    }

}
