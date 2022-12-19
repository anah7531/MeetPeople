package com.meetPeople.repository;

import com.meetPeople.entity.Membre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MembreRepository extends JpaRepository<Membre, Integer> {

    @Query(
            nativeQuery = true,
            value =
                    "SELECT idMembre " +
                    "FROM membre " +
                    "WHERE idMembre NOT IN :listOfId"
    )
    List<Integer> getAvailableProfileIds(List<Integer> listOfId);

    Optional<Membre> findFirstByCourriel(String courriel);






}
