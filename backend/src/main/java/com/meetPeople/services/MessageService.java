package com.meetPeople.services;

import com.meetPeople.entity.Message;
import com.meetPeople.model.Conversation;
import com.meetPeople.model.Profile;
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
    ProfileService profileService;
    @Autowired
    MessageRepository messageRepository;

    public Message saveMessage(Message message){

        if (matchService.isMatch(message.getIdMembreExpediteur(), message.getIdMembreRecevant())){
            message.setIdMessage(0);
            message.setDateMessage(new Date());
            return messageRepository.save(message);
        }

        return null;
    }

    public Conversation getConversation(int myId, int userId){
        Profile profile = profileService.getShortProfile(userId);
        List<Message> messages = messageRepository.getConversation(myId, userId);
        return new Conversation(profile, messages);
    }
}
