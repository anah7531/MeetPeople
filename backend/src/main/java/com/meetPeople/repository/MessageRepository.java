package com.meetPeople.repository;

import com.meetPeople.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface MessageRepository extends JpaRepository<Message, Integer> {

    @Query(
            "FROM Message m " +
            "WHERE m.idMembreExpediteur IN (:myId , :userId) " +
            "AND m.idMembreRecevant IN (:myId , :userId) " +
            "ORDER BY m.idMessage"
    )
    List<Message> getConversation(int myId, int userId);

    @Query(
            nativeQuery = true,
            value =
                "SELECT DISTINCT idMembreRecevant FROM message WHERE idMembreExpediteur = :myId " +
                "UNION " +
                "SELECT DISTINCT idMembreExpediteur FROM message WHERE idMembreRecevant = :myId"
    )
    List<Integer> getAllUserIdOfMyConversations(int myId);

    @Query(
            nativeQuery = true,
            value =
                    "SELECT * " +
                    "FROM message " +
                    "WHERE idMembreExpediteur IN (:myId , :userId) AND idMembreRecevant IN (:myId , :userId) " +
                    "ORDER BY idMessage DESC " +
                    "LIMIT 1"
    )
    Optional<Message> getLastMessageOfConversation(int myId, int userId);
}
