package com.meetPeople.controller;

import com.meetPeople.entity.Message;
import com.meetPeople.services.MatchService;
import com.meetPeople.services.MessageService;
import jakarta.websocket.server.PathParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/message")
@CrossOrigin("*")
public class MessageController {

    @Autowired
    private MessageService messageService;


    @PostMapping()
    public boolean saveMessage(@RequestBody Message message){
        return messageService.saveMessage(message);
    }

    @GetMapping("/{id}/{userId}")
    public List<Message> getConversation(@PathVariable int id, @PathVariable int userId){
        return messageService.getConversation(id, userId);
    }
}
