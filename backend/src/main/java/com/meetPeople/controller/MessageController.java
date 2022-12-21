package com.meetPeople.controller;

import com.meetPeople.entity.Message;
import com.meetPeople.model.Conversation;
import com.meetPeople.model.InboxMessage;
import com.meetPeople.services.MatchService;
import com.meetPeople.services.MessageService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
@CrossOrigin("*")
public class MessageController extends BaseController {

    @Autowired
    private MessageService messageService;


    @PostMapping()
    public Message saveMessage(@RequestBody Message message){
        return messageService.saveMessage(message);
    }

    @GetMapping("/{id}/{userId}")
    public Conversation getConversation(@PathVariable int id, @PathVariable int userId){
        return messageService.getConversation(id, userId);
    }

    @GetMapping
    public List<InboxMessage> getInbox(){
        return messageService.getInbox(super.getMyId());
    }
}
