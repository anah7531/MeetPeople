package com.meetPeople.repository;

import com.meetPeople.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {

    @Query(
            "FROM Message m " +
            "WHERE m.idMembreExpediteur IN (:myId , :userId) " +
            "AND m.idMembreRecevant IN (:myId , :userId) " +
            "ORDER BY m.idMessage"
    )
    List<Message> getConversation(int myId, int userId);
}
