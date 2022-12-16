package com.meetPeople.services;


import com.meetPeople.entity.MatchTable;
import com.meetPeople.entity.MatchTablePk;
import com.meetPeople.model.Profile;
import com.meetPeople.repository.MatchTableRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class MatchService {

    @Autowired
    MatchTableRepository matchTableRepository;
    @Autowired
    ProfileService profileService;

    public List<Profile> getMyMatches(int id){
        List<Integer> matchesId = matchTableRepository.getMyMatchesId(id);
        List<Profile> profileList = new ArrayList<>();

        for (Integer profileId : matchesId){
            Profile profile = profileService.getShortProfile(profileId);

            if(profile != null)
                profileList.add(profile);
        }

        return profileList;
    }

    public boolean isMatch(int myId, int otherUserId){
        MatchTable match1 = matchTableRepository.findById(new MatchTablePk(myId, otherUserId)).orElse(null);

        if(match1 == null)
            return  false;

        Boolean aimerInitiateur = match1.getEstAimerParInitiateur();
        Boolean aimerSecond = match1.getEstAimerParSecond();

        return aimerInitiateur != null && aimerInitiateur && aimerSecond != null && aimerSecond;

    }


    //returns 2 if the records are inserted and returns 1 if there was an update
    @Transactional
    public Map onClickForLikeOrNot(MatchTable match1){
        int idMembreInitiateur = match1.getIdMembreInitiateur();
        int idMembreSecond = match1.getIdMembreSecond();
        Boolean estAimerParInitiateur = match1.getEstAimerParInitiateur();

        if(matchTableRepository.srchPrevLikeBetween2Mems(idMembreInitiateur, idMembreSecond).isEmpty()) {
            //list empty -> no record -> Insert 2 rows
            matchTableRepository.insertLike(idMembreInitiateur, idMembreSecond, estAimerParInitiateur);

        } else {
            //list have record -> records found -> Update 2 rows
            matchTableRepository.updateMatchInitiateur(idMembreInitiateur, idMembreSecond, estAimerParInitiateur);
            matchTableRepository.updateMatchSecond(idMembreInitiateur, idMembreSecond, estAimerParInitiateur);
        }

        Map<String, Boolean> response = new HashMap<>();
        Boolean isMatch = isMatch(idMembreInitiateur, idMembreSecond);
        response.put("isMatch", isMatch);
        return response;
    }
}
