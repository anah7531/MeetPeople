package com.meetPeople.repository;

import com.meetPeople.entity.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {

    @Query("FROM Photo p WHERE p.idPhoto = :id AND p.estPhotoProfil = true")
    Optional<Photo> getProfilePhoto(int id);
}
