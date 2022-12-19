package com.meetPeople.services;

import com.meetPeople.entity.Membre;
import com.meetPeople.exception.BadRequestException;
import com.meetPeople.repository.MembreRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    @Autowired
    MembreRepository membreRepository;

    public Map<String, Object> login(HttpSession session, Map<String, Object> body){
        String courriel = (String) body.get("courriel");
        String motDePasse = (String) body.get("motDePasse");
        Map<String, Object> responseBody = new HashMap<>();

        if(courriel == null || motDePasse == null)
            throw new BadRequestException();

        Membre membre = membreRepository.findFirstByCourriel(courriel).orElse(null);

        if(membre == null)
            throw new BadRequestException();

        if(!courriel.equals(membre.getCourriel()) || !motDePasse.equals(membre.getMotDePasse()))
            throw new BadRequestException();

        responseBody.put("loginId", membre.getIdMembre());
        responseBody.put("role", "membre");

        session.setAttribute("loginId", membre.getIdMembre());
        session.setAttribute("role", "membre");

        return responseBody;
    }
}
