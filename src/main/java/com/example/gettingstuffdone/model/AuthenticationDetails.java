package com.example.gettingstuffdone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;
import java.util.Objects;

@Entity
public class AuthenticationDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AuthenticationDetails that = (AuthenticationDetails) o;
        return Objects.equals(id, that.id) && Objects.equals(email, that.email) && Objects.equals(password, that.password) && Objects.equals(user, that.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, password, user);
    }

    @Override
    public String toString() {
        return "AuthenticationDetails{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", user=" + user +
                '}';
    }
}
