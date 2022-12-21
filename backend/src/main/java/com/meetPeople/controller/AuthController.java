package com.meetPeople.controller;

import com.meetPeople.entity.Membre;
import com.meetPeople.repository.MembreRepository;
import com.meetPeople.services.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    MembreRepository membreRepository;
    @Autowired
    AuthService authService;

    @PostMapping("/register")
    public Membre register(@RequestBody Membre membre){
        return membreRepository.save(membre);
    }

    @PostMapping("/login")
    public Map<String, Object> login(HttpServletRequest req,  @RequestBody Map<String, Object> body){
        HttpSession session = req.getSession();
        return authService.login(session, body);
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest req){
        req.getSession().invalidate();
    }

}
