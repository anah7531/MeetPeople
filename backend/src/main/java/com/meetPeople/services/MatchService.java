package com.meetPeople.services;

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
        MatchTable match2 = matchTableRepository.findById(new MatchTablePk(otherUserId, myId)).orElse(null);

        if(match1 != null && match1.isEstAimerParInitiateur() && match1.getEstAimerParSecond())
            return true;

        if(match2 != null && match2.isEstAimerParInitiateur() && match2.getEstAimerParSecond())
            return true;

        return false;
    }
}
