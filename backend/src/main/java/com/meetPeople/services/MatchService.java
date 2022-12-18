package com.meetPeople.services;

import com.meetPeople.controller.MatchController;
import com.meetPeople.entity.MatchTable;
import com.meetPeople.entity.MatchTablePk;
import com.meetPeople.model.Profile;
import com.meetPeople.repository.MatchTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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

    //True or False if they have both matched
 /*   public  boolean onClickForLikeOrNot(int idMembreInitiateur, int idMembreSecond, Boolean estAimerParInitiateur){
        if(matchTableRepository.srchPrevLikeOrNotLikeBetween2Mems(idMembreInitiateur, idMembreSecond).isEmpty()) {
            //list empty -> no records -> Insert 2 rows
            matchTableRepository.insertLike(idMembreInitiateur, idMembreSecond, estAimerParInitiateur);
            //One person has liked the other but since list was empty rigt before insert then there's no match for now
            return false;
        } else {
            //list has records -> records found -> Update 2 rows
            matchTableRepository.updateMatchInitiateur(idMembreInitiateur, idMembreSecond, estAimerParInitiateur);
            matchTableRepository.updateMatchSecond(idMembreInitiateur, idMembreSecond, estAimerParInitiateur);
            if(isMatch(idMembreInitiateur, idMembreSecond ) && isMatch(idMembreSecond , idMembreInitiateur ) ){
                //If they both have liked each other, then return true
                return true;
            }
            else return false;
        }
    }//onClickForLikeOrNot*/


    //returns 2 if the records are inserted and returns 1 if there was an update
    public  Integer onClickForLikeOrNot(int idMembreInitiateur, int idMembreSecond, Boolean estAimerParInitiateur){

        if(matchTableRepository.srchPrevLikeBetween2Mems(idMembreInitiateur, idMembreSecond).isEmpty()) {

            //list empty -> no record -> Insert 2 rows
            return matchTableRepository.insertLike(idMembreInitiateur, idMembreSecond, estAimerParInitiateur);

        } else {

            //list have record -> records found -> Update 2 rows
            if(matchTableRepository.updateMatchInitiateur(idMembreInitiateur, idMembreSecond, estAimerParInitiateur) == 1 &&
                    matchTableRepository.updateMatchSecond(idMembreInitiateur, idMembreSecond, estAimerParInitiateur) == 1  )
                return 1;

            else return 0;

        }

    }
}
