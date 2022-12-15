package com.meetPeople.services;

import com.meetPeople.controller.MatchController;
import com.meetPeople.entity.MatchTable;
import com.meetPeople.entity.MatchTablePk;
import com.meetPeople.model.Profile;
import com.meetPeople.repository.MatchTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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

    public Boolean isMatch(int myId, int otherUserId){
        MatchTable match1 = matchTableRepository.findById(new MatchTablePk(myId, otherUserId)).orElse(null);

        return match1 != null && match1.getEstAimerParInitiateur() && match1.getEstAimerParSecond();
    }

    public List<MatchTable> srchPrevLikeBetween2MemsService(int idMembreInitiateur, int idMembreSecond) {
        List<MatchTable> searchresult = matchTableRepository.srchPrevLikeBetween2Mems(idMembreInitiateur,idMembreSecond);
        return searchresult;
    }

    public  Integer  updateMatchInitiateur (int idMembreInitiateur, int idMembreSecond, Boolean estAimerParInitiateur){

        Integer resultList = matchTableRepository.updateMatchInitiateur(idMembreInitiateur,idMembreSecond, estAimerParInitiateur);

        return resultList;
    }

    public  Integer  updateMatchSecond (int idMembreInitiateur, int idMembreSecond, Boolean estAimerParInitiateur){

        Integer resultList = matchTableRepository.updateMatchSecond(idMembreInitiateur,idMembreSecond, estAimerParInitiateur);

        return resultList;
    }

    public  Integer insertLike(int idMembreInitiateur, int idMembreSecond, Boolean estAimerParInitiateur){

        Integer resultList = matchTableRepository.insertLike(idMembreInitiateur,idMembreSecond, estAimerParInitiateur);

        return resultList;
    }

    //returns 2 if the records are inserted and returns 1 if there was an update
    public  Integer onClickForLikeOrNot(int idMembreInitiateur, int idMembreSecond, Boolean estAimerParInitiateur){
        System.out.println("Were are inside onClickForLikeOrNot");
        MatchController matchController= new MatchController();

        if(matchTableRepository.srchPrevLikeBetween2Mems(idMembreInitiateur, idMembreSecond).isEmpty()) {
            //list empty -> no record -> Insert 2 rows
            System.out.println("Were are inserting 2 rows");
            return matchTableRepository.insertLike(idMembreInitiateur, idMembreSecond, estAimerParInitiateur);
        } else {
            //list have record -> records found -> Update 2 rows
            System.out.println("Were are updating 2 rows");

            if(matchTableRepository.updateMatchInitiateur(idMembreInitiateur, idMembreSecond, estAimerParInitiateur) == 1 &&
                    matchTableRepository.updateMatchSecond(idMembreInitiateur, idMembreSecond, estAimerParInitiateur) == 1  )
                return 1;

            else return 0;

        }

    }





}
