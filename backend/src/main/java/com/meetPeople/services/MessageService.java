package com.meetPeople.services;

import com.meetPeople.entity.Message;
import com.meetPeople.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    MatchService matchService;
    @Autowired
    MessageRepository messageRepository;

    public boolean saveMessage(Message message){

        if (matchService.isMatch(message.getIdMembreExpediteur(), message.getIdMembreRecevant())){
            message.setIdMessage(0);
            message.setDateMessage(new Date());
            messageRepository.save(message);
            return true;
        }

        return false;
    }

    public List<Message> getConversation(int myId, int userId){
        return messageRepository.getConversation(myId, userId);
    }
}
