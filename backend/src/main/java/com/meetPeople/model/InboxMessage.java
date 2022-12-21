package com.meetPeople.model;

import com.meetPeople.entity.Message;
import lombok.Data;

@Data
public class InboxMessage {

    private final Profile profile;
    private final Message message;
}
