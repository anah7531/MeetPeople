package com.meetPeople.filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

@WebFilter(urlPatterns = {
        "/message",
        "/evaluation",
        "/match",
        "/photo",
        "/profile",
        "/plainte"
})
public class SecuredFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        HttpSession session = req.getSession();
        Integer loginId = (Integer) session.getAttribute("loginId");

        if(loginId == null){
            res.setStatus(403);
            res.getWriter().close();

        } else{
            chain.doFilter(request, response);
        }
    }
}
