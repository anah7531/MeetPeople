package com.meetPeople.repository;

import com.meetPeople.models.Membre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MembreRepository extends JpaRepository<Membre, Integer> {

}
