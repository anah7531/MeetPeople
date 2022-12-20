package com.meetPeople.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;

public class BaseController {

    @Autowired
    HttpSession session;

    public int getMyId(){
        return (int) session.getAttribute("loginId");
    }
}
