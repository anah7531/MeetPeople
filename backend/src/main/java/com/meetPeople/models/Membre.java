package com.meetPeople.models;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name = "Membre")
public class Membre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idMembre")
    private int idMembre;
    private String courriel;
    private String nom;
    private String prenom;
    private String motDePasse;

    @Column(name = "estActif", columnDefinition="BIT")
    private boolean estActif;

    private String detailProfil;
    private String sexe;
    private int grandeur;

    private Date dateDeNaissance;

    @Column(name = "estVerifie", columnDefinition="BIT")
    private boolean estVerifie;

    private int idSituationFamiliale;
    private int idInteret;
    private Integer numeroAdminDesactive;

    //Constructeur
    public Membre() {  }

    public Membre(int idMembre, String courriel, String nom, String prenom, String motDePasse, boolean estActif, String detailProfil, String sexe, int grandeur, Date dateDeNaissance, boolean estVerifie, int idSituationFamiliale, int idInteret, Integer numeroAdminDesactive) {
        this.idMembre = idMembre;
        this.courriel = courriel;
        this.nom = nom;
        this.prenom = prenom;
        this.motDePasse = motDePasse;
        this.estActif = estActif;
        this.detailProfil = detailProfil;
        this.sexe = sexe;
        this.grandeur = grandeur;
        this.dateDeNaissance = dateDeNaissance;
        this.estVerifie = estVerifie;
        this.idSituationFamiliale = idSituationFamiliale;
        this.idInteret = idInteret;
        this.numeroAdminDesactive = numeroAdminDesactive;
    }

    public int getIdMembre() {
        return idMembre;
    }

    public void setIdMembre(int idMembre) {
        this.idMembre = idMembre;
    }

    public String getCourriel() {
        return courriel;
    }

    public void setCourriel(String courriel) {
        this.courriel = courriel;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }

    public boolean isEstActif() {
        return estActif;
    }

    public void setEstActif(boolean estActif) {
        this.estActif = estActif;
    }

    public String getDetailProfil() {
        return detailProfil;
    }

    public void setDetailProfil(String detailProfil) {
        this.detailProfil = detailProfil;
    }

    public String getSexe() {
        return sexe;
    }

    public void setSexe(String sexe) {
        this.sexe = sexe;
    }

    public int getGrandeur() {
        return grandeur;
    }

    public void setGrandeur(int grandeur) {
        this.grandeur = grandeur;
    }

    public Date getDateDeNaissance() {
        return dateDeNaissance;
    }

    public void setDateDeNaissance(Date dateDeNaissance) {
        this.dateDeNaissance = dateDeNaissance;
    }

    public boolean isEstVerifie() {
        return estVerifie;
    }

    public void setEstVerifie(boolean estVerifie) {
        this.estVerifie = estVerifie;
    }

    public int getIdSituationFamiliale() {
        return idSituationFamiliale;
    }

    public void setIdSituationFamiliale(int idSituationFamiliale) {
        this.idSituationFamiliale = idSituationFamiliale;
    }

    public int getIdInteret() {
        return idInteret;
    }

    public void setIdInteret(int idInteret) {
        this.idInteret = idInteret;
    }

    public Integer getNumeroAdminDesactive() {
        return numeroAdminDesactive;
    }

    public void setNumeroAdminDesactive(Integer numeroAdminDesactive) {
        this.numeroAdminDesactive = numeroAdminDesactive;
    }

    @Override
    public String toString() {
        return "Membre{" +
                "idMembre=" + idMembre +
                ", courriel='" + courriel + '\'' +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", motDePasse='" + motDePasse + '\'' +
                ", estActif=" + estActif +
                ", detailProfil='" + detailProfil + '\'' +
                ", sexe='" + sexe + '\'' +
                ", grandeur=" + grandeur +
                ", dateDeNaissance=" + dateDeNaissance +
                ", estVerifie=" + estVerifie +
                ", idSituationFamiliale=" + idSituationFamiliale +
                ", idInteret=" + idInteret +
                ", numeroAdminDesactive=" + numeroAdminDesactive +
                '}';
    }
}
