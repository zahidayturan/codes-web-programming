package com.example.web3;

import java.io.*;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String name = request.getParameter("name");
        String surname = request.getParameter("surname");
        String email = request.getParameter("email");
        String password = request.getParameter("password");


        response.setContentType("text/html");
        response.getWriter().println("<html><head><title>Kayıt Bilgileri</title></head><body>");
        response.getWriter().println("<h1>Kayıt Bilgileri</h1>");
        response.getWriter().println("<p>Ad: " + name + "</p>");
        response.getWriter().println("<p>Soyad: " + surname + "</p>");
        response.getWriter().println("<p>Eposta: " + email + "</p>");
        response.getWriter().println("<p>Şifre: " + maskPassword(password) + "</p>");
        response.getWriter().println("<script>alert('Tarayıcının modeli: " + request.getHeader("User-Agent") + "');</script>");
        response.getWriter().println("</body></html>");
    }


    private String maskPassword(String password) {
        int length = password.length();
        String masked = "*".repeat(length);
        return masked;
    }
}