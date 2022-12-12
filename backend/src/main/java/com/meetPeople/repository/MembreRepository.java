package com.meetPeople.repository;

import com.meetPeople.entity.Membre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MembreRepository extends JpaRepository<Membre, Integer> {

    @Query(
            nativeQuery = true,
            value =
                    "select membre.idMembre " +
                            "from membre " +
                            "where idMembre not in :listOfId"
    )
    List<Integer> getAvailableProfileIds(List<Integer> listOfId);






}
