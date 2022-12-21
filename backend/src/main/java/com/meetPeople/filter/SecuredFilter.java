package com.meetPeople.filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.core.annotation.Order;

import java.io.IOException;

@WebFilter(urlPatterns = {
        "/message",
        "/evaluation",
        "/match",
        "/photo",
        "/profile/*",
        "/plainte"
})
@Order(1)
public class SecuredFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;
        HttpSession session = req.getSession();
        Integer loginId = (Integer) session.getAttribute("loginId");


        System.out.println(session.getId());
        System.out.println("filter called");
        System.out.println(loginId);
        System.out.println(req.getHeader("Cookie"));

        if(loginId == null){
           res.sendError(401);

        } else{
            chain.doFilter(request, response);
        }
    }
}
