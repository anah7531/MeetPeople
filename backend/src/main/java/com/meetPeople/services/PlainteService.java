package com.meetPeople.services;

import com.meetPeople.entity.Plainte;
import com.meetPeople.repository.PlainteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class PlainteService {

    @Autowired
    PlainteRepository plainteRepository;

    @Autowired
    MatchService matchService;


    public boolean savePlainte(Plainte plainte){
        //Membre peut seulement faire une plainte avec un membre avec qui il a eu une interaction donc il a match.

        if (matchService.isMatch(plainte.getIdMembrePlaignant(), plainte.getIdMembreConcerner())){
            plainte.setIdPlainte(0);
            plainte.setDate(new Date());
            plainte.setNumeroEmploye(null);
            plainteRepository.save(plainte);

            return true;
        }
        else return false;

    }














}
