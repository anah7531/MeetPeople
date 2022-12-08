package com.meetPeople.models;

import jakarta.persistence.*;

@Entity()
@Table(name="SituationFamiliale")
public class SituationFamiliale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idSituationFamiliale")
    private int idSituationFamiliale;

    @Column(name = "description")
    private String description;

    public SituationFamiliale(int idSituationFamiliale, String description) {
        this.idSituationFamiliale = idSituationFamiliale;
        this.description = description;
    }

    public SituationFamiliale() {
    }

    public int getIdSituationFamiliale() {
        return idSituationFamiliale;
    }

    public void setIdSituationFamiliale(int idSituationFamiliale) {
        this.idSituationFamiliale = idSituationFamiliale;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "SituationFamiliale{" +
                "idSituationFamiliale=" + idSituationFamiliale +
                ", description='" + description + '\'' +
                '}';
    }
}
