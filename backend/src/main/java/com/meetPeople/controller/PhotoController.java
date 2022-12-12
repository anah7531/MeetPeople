package com.meetPeople.controller;

import com.meetPeople.entity.Photo;
import com.meetPeople.services.PhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/photo")
public class PhotoController {

    @Autowired
    private PhotoService photoService;

    @GetMapping("{id}")
    public Photo getPhotoProfile(@PathVariable int id){
        return photoService.getProfilePhoto(id);
    }
}
