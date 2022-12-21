package com.meetPeople.services;

import com.meetPeople.entity.Message;
import com.meetPeople.model.Conversation;
import com.meetPeople.model.InboxMessage;
import com.meetPeople.model.Profile;
import com.meetPeople.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

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

    public List<InboxMessage> getInbox(int myId){
        List<Integer> conversationUserId = messageRepository.getAllUserIdOfMyConversations(myId);
        List<InboxMessage> inbox = new ArrayList<>();

        for (Integer userId : conversationUserId){
            Message message = messageRepository.getLastMessageOfConversation(myId, userId).orElse(null);
            Profile profile = profileService.getShortProfile(userId);

            if(message != null && profile != null)
                inbox.add(new InboxMessage(profile, message));
        }

        return inbox;
    }
}
