package com.meetPeople.services;

import com.meetPeople.entity.Membre;
import com.meetPeople.repository.MembreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MembreService {

    @Autowired
    MatchService matchService;
    @Autowired
    MembreRepository membreRepository;





}
