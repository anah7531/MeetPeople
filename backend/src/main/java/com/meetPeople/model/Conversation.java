package com.meetPeople.model;

import com.meetPeople.entity.Message;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@AllArgsConstructor
@Data
public class Conversation {
    private Profile profile;
    private List<Message> messages;
}
