package com.meetPeople.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.sql.Date;

@Entity
@Table(name = "MatchTable")
@IdClass(MatchTablePk.class)
@Data
public class MatchTable {

    @Id
    private int idMembreInitiateur;
    @Id
    private int IdMembreSecond;
    private Boolean estAimerParInitiateur;
    private Boolean estAimerParSecond;
    private Date dateInitiateur;
    private Date dateSecond;

}
