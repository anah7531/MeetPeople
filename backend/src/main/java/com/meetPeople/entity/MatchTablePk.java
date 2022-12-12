package com.meetPeople.entity;

import jakarta.persistence.Id;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@EqualsAndHashCode
public class MatchTablePk implements Serializable {

    private int idMembreInitiateur;
    private int IdMembreSecond;
}
