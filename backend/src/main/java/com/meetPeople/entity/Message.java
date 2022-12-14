package com.meetPeople.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Entity
@Table(name = "Message")
@Data
@NoArgsConstructor
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMessage;
    private String contenu;
    private Date dateMessage;
    private int idMembreExpediteur;
    private int idMembreRecevant;
}
