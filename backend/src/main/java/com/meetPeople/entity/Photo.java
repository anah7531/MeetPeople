package com.meetPeople.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Photo")
@NoArgsConstructor
@Data
public class Photo {

    @Id
    private int idPhoto;

    private String cheminURL;
    private boolean estPhotoProfil;
    private int idMembre;
}
