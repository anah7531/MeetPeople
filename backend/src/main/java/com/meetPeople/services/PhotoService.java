package com.meetPeople.services;

import com.meetPeople.entity.Photo;
import com.meetPeople.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhotoService {

    @Autowired
    private PhotoRepository photoRepository;

    public Photo getProfilePhoto(int id){
        return photoRepository.getProfilePhoto(id).orElse(null);
    }
}
