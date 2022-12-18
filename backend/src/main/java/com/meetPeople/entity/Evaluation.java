package com.meetPeople.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;

@Entity
@Table(name = "evaluation")
@Data
@NoArgsConstructor
public class Evaluation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idEvaluation;
    private int note;
    private String description;
    private Date date;
    private int idMembreEvaluateur;
    private int idMembreEvalue;

}
