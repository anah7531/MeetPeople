package com.meetPeople.repository;

import com.meetPeople.entity.MatchTable;
import com.meetPeople.entity.MatchTablePk;
import org.springframework.data.jpa.repository.JpaRepository;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MatchTableRepository extends JpaRepository<MatchTable, MatchTablePk> {
    @Query(
            nativeQuery = true,
            value = "SELECT idMembreSecond " +
                    "FROM MatchTable  " +
                    "WHERE idMembreInitiateur = :id " +
                    "AND estAimerParInitiateur IS NOT NULL"
    )
    List<Integer> getProfilesIdILikedOrDisliked(int id);

    @Query(
            nativeQuery = true,
            value =
                    "SELECT idMembreSecond " +
                    "FROM matchTable " +
                    "WHERE idMembreInitiateur = :id " +
                    "AND estAimerParInitiateur = 1 " +
                    "AND estAimerParSecond = 1 "
    )
    List<Integer> getMyMatchesId(int id);

    @Query(
            nativeQuery = true,
            value =
                    "SELECT * " +
                            "FROM matchTable " +
                            "WHERE idMembreInitiateur = :idMembreInitiateur " +
                            "AND idMembreSecond= :idMembreSecond "+
                            "AND estAimerParInitiateur = 1 " +
                            "AND estAimerParSecond = 1 "

    )
    Integer haveTheyMatched(int idMembreInitiateur, int idMembreSecond);

    @Query(
            nativeQuery = true,
            value =
                    "SELECT * " +
                            "FROM matchTable " +
                            "WHERE idMembreInitiateur = :idMembreInitiateur "+
                            "AND idMembreSecond = :idMembreSecond "+
                            "OR (idMembreInitiateur= :idMembreSecond " +
                            "AND idMembreSecond = :idMembreInitiateur)"

    )
    List<MatchTable> srchPrevLikeBetween2Mems(int idMembreInitiateur, int idMembreSecond);

    @Transactional
    @Modifying
    @Query(
            nativeQuery = true,
            value =
                    "UPDATE matchTable " +
                            "SET estAimerParInitiateur = " +
                            "        CASE " +
                            "        WHEN estAimerParInitiateur <> :estAimerParInitiateur " +
                            "        THEN :estAimerParInitiateur " +
                            "        WHEN estAimerParInitiateur IS NULL " +
                            "        THEN :estAimerParInitiateur " +
                            "        END, " +
                            "     dateInitiateur = " +
                            "        CASE " +
                            "        WHEN dateInitiateur IS NULL " +
                            "        THEN CURRENT_DATE()" +
                            "        ELSE CURRENT_DATE()" +
                            "        END " +
                            "WHERE idMembreInitiateur = :idMembreInitiateur " +
                            "AND IdMembreSecond = :IdMembreSecond "


    )
    Integer updateMatchInitiateur(int idMembreInitiateur, int IdMembreSecond, Boolean estAimerParInitiateur);


    @Transactional
    @Modifying
    @Query(
            nativeQuery = true,
            value =
                    "UPDATE matchTable " +
                            "SET estAimerParSecond = " +
                            "        CASE " +
                            "        WHEN estAimerParSecond <> :estAimerParInitiateur " +
                            "        THEN :estAimerParInitiateur " +
                            "        WHEN estAimerParSecond IS NULL " +
                            "        THEN :estAimerParInitiateur " +
                            "        END, " +
                            "     dateSecond = " +
                            "        CASE " +
                            "        WHEN dateSecond IS NULL " +
                            "        THEN CURRENT_DATE()" +
                            "        ELSE CURRENT_DATE()" +
                            "        END " +
                            "WHERE idMembreInitiateur = :IdMembreSecond " +
                            "AND IdMembreSecond = :idMembreInitiateur"


    )
    Integer updateMatchSecond(int idMembreInitiateur, int IdMembreSecond, Boolean estAimerParInitiateur);


    @Transactional
    @Modifying
    @Query(
            nativeQuery = true,
            value =
                    "insert into MatchTable values "+
                    "(:idMembreInitiateur,:IdMembreSecond,:estAimerParInitiateur,null,CURRENT_DATE(),null) ,"+
                    "(:IdMembreSecond,:idMembreInitiateur,null,:estAimerParInitiateur,null,CURRENT_DATE())"
    )
    Integer insertLike(int idMembreInitiateur, int IdMembreSecond, Boolean estAimerParInitiateur);


}
