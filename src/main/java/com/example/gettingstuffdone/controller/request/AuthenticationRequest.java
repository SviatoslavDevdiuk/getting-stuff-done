package com.example.gettingstuffdone.controller.request;

public class AuthenticationRequest {

    private UserDTO user;
    private String password;

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "AuthenticationRequest{" +
                "user=" + user +
                ", password='" + password + '\'' +
                '}';
    }
}
