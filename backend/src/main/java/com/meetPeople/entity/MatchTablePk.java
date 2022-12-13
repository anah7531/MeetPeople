package com.meetPeople.entity;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@EqualsAndHashCode
@AllArgsConstructor
public class MatchTablePk implements Serializable {

    private int idMembreInitiateur;
    private int IdMembreSecond;
}
