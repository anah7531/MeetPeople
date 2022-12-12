package com.meetPeople.services;

import com.meetPeople.entity.Membre;
import com.meetPeople.entity.Photo;
import com.meetPeople.model.Profile;
import com.meetPeople.repository.MatchTableRepository;
import com.meetPeople.repository.MembreRepository;
import com.meetPeople.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private MatchTableRepository matchTableRepository;
    @Autowired
    private MembreRepository membreRepository;
    @Autowired
    private PhotoRepository photoRepository;

    public List<Profile> getAvailableProfile(int id){

        List<Integer> listOfId = matchTableRepository.getProfilesIdILikedOrDisliked(id);
        listOfId.add(id);

        List<Integer> listOfAvailableIds = membreRepository.getAvailableProfileIds(listOfId);
        List<Profile> profiles = new ArrayList<>();

        for(Integer profileId : listOfAvailableIds){
            Profile profile = getShortProfile(profileId);

            if(profile != null)
                profiles.add(profile);
        }

        return profiles;
    }

    public Profile getShortProfile(int id){
        Membre membre = membreRepository.findById(id).orElse(null);
        Photo photo = photoRepository.getProfilePhoto(id).orElse(new Photo());
        Profile.ProfileBuilder profile = Profile.builder();

        if(membre == null)
            return null;

        profile
                .idMembre(membre.getIdMembre())
                .nom(membre.getNom())
                .prenom(membre.getPrenom())
                .sexe(membre.getSexe())
                .dateDeNaissance(membre.getDateDeNaissance())
                .photoProfil(photo.getCheminURL());

        return profile.build();

    }
}
