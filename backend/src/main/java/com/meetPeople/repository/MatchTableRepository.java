package com.meetPeople.repository;

import com.meetPeople.entity.MatchTable;
import com.meetPeople.entity.MatchTablePk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatchTableRepository extends JpaRepository<MatchTable, MatchTablePk> {

    @Query(
        nativeQuery = true,
        value =
            "SELECT idMembreSecond " +
            "FROM matchTable " +
            "WHERE idMembreInitiateur = :id " +
            "UNION " +
            "SELECT idMembreInitiateur " +
            "FROM matchTable " +
            "WHERE idMembreSecond = :id " +
            "AND estAimerParSecond IS NOT NULL"
    )
    List<Integer> getProfilesIdILikedOrDisliked(int id);

    @Query(
        nativeQuery = true,
        value =
                "SELECT idMembreSecond " +
                "FROM matchTable " +
                "WHERE idMembreInitiateur = :id " +
                "AND estAimerParInitiateur = 1 " +
                "AND estAimerParSecond = 1 " +
                "UNION " +
                "SELECT idMembreInitiateur " +
                "FROM matchTable " +
                "WHERE idMembreSecond = :id " +
                "AND estAimerParInitiateur = 1 " +
                "AND estAimerParSecond = 1"

    )
    List<Integer> getMyMatchesId(int id);
}
