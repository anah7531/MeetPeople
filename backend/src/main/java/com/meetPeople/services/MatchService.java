package com.meetPeople.services;

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
}
