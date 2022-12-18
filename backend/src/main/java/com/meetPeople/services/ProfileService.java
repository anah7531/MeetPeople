package com.meetPeople.services;

import com.meetPeople.entity.Evaluation;
import com.meetPeople.entity.Membre;
import com.meetPeople.entity.Photo;
import com.meetPeople.model.Profile;
import com.meetPeople.repository.EvaluationRepository;
import com.meetPeople.repository.MatchTableRepository;
import com.meetPeople.repository.MembreRepository;
import com.meetPeople.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ProfileService {

    @Autowired
    private MatchTableRepository matchTableRepository;
    @Autowired
    private MembreRepository membreRepository;

    //@Autowired
   // private Profile membreRepository;
    @Autowired
    private PhotoRepository photoRepository;
    @Autowired
    private EvaluationRepository evaluationRepository;


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


    public Profile showMatchDetailedProfile(int myId, int potentialMatchId){
        //If they have matched returns potentialMatchId if they don't match returns null
        Integer matchId = matchTableRepository.haveTheyMatched(myId, potentialMatchId);
        Membre membreMatch = membreRepository.findById(potentialMatchId).orElse(null);

        Photo photo = photoRepository.getProfilePhoto(potentialMatchId).orElse(new Photo());
        List <String> cheminUrlPhotoList = photoRepository.getCheminURLByIdMembre(potentialMatchId);

        LocalDate currentDate = LocalDate.now();
        int currentYear = currentDate.getYear();
        //.getYear() retourne l'année - 1900
        int membreMatchDobYear = membreMatch.getDateDeNaissance().getYear() + 1900;
        int age = currentYear - membreMatchDobYear;

        List <Evaluation> evaluationList = evaluationRepository.findAllByIdMembreEvalue(potentialMatchId);

        List <Integer> listeNotesMembreEvalue = evaluationRepository.findMembreEvalueNotes(potentialMatchId);
        System.out.println(listeNotesMembreEvalue);

        double notesSum = 0;
        double noteEvalueAvg = 0;

        if(!(listeNotesMembreEvalue.isEmpty())){
            for (Integer note : listeNotesMembreEvalue)
                notesSum += note;

            noteEvalueAvg = notesSum/listeNotesMembreEvalue.size();
        }else noteEvalueAvg = 0;

        Profile.ProfileBuilder profile = Profile.builder();

        if(matchId != null){
            System.out.println("Ils Matchent");
            profile
                    .idMembre(membreMatch.getIdMembre())
                    .nom(membreMatch.getNom())
                    .prenom(membreMatch.getPrenom())
                    .detailProfil(membreMatch.getDetailProfil())
                    .sexe(membreMatch.getSexe())
                    .grandeur(membreMatch.getGrandeur())
                    .dateDeNaissance(membreMatch.getDateDeNaissance())
                    .estVerifie(membreMatch.isEstVerifie())
                    .idSituationFamiliale(membreMatch.getIdSituationFamiliale())
                    .idInteret(membreMatch.getIdInteret())
                    .photoProfil(photo.getCheminURL())
                    .age(age)
                    .evaluationGlobale(noteEvalueAvg)
                    .photoList(cheminUrlPhotoList)
                    .evaluationList(evaluationList);
            return profile.build();
        } else {
            System.out.println("N'ont pas match");
            return null;
        }

    }//showMatchDetailedProfile
}
