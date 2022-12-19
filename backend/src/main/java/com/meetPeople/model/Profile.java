package com.meetPeople.model;

import com.meetPeople.entity.Evaluation;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.sql.Date;
import java.util.List;

@Data
@Builder
public class Profile {

    private Integer idMembre;
    private String nom;
    private String prenom;
    private String detailProfil;
    private String sexe;
    private Integer grandeur;
    private Date dateDeNaissance;
    private Boolean estVerifie;
    private Integer idSituationFamiliale;
    private Integer idInteret;
    private String photoProfil;

    private int age;
    private double evaluationGlobale;
    private List<String> photoList;
    private List <Evaluation> evaluationList;

}
