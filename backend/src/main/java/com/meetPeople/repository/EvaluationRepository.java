package com.meetPeople.repository;

import com.meetPeople.entity.Evaluation;
import com.meetPeople.entity.MatchTable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EvaluationRepository extends JpaRepository<Evaluation, Integer> {

    @Query(
            nativeQuery = true,
            value =
                    "SELECT * " +
                            "FROM evaluation " +
                            "WHERE idMembreEvaluateur = :idMembreEvaluateur "+
                            "AND idMembreEvalue = :idMembreEvalue "

    )
    List<Evaluation> searchIfAnEvaluationExists(int idMembreEvaluateur, int idMembreEvalue);


}
