package com.meetPeople.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Entity
@Table(name = "Plainte")
@Data
@NoArgsConstructor
public class Plainte {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPlainte;
    private String contenu;
    private Date date;
    private Integer numeroEmploye;
    private int idMembrePlaignant;
    private int idMembreConcerner;


}
