package com.example.gettingstuffdone.controller.response;

import com.example.gettingstuffdone.model.Board;

import java.util.List;
import java.util.Objects;

public class PersonDTO {

    private String firstName;

    private String lastName;
    private List<Board> boards;


    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<Board> getBoards() {
        return boards;
    }

    public void setBoards(List<Board> boards) {
        this.boards = boards;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PersonDTO personDTO = (PersonDTO) o;
        return Objects.equals(firstName, personDTO.firstName) && Objects.equals(lastName, personDTO.lastName) && Objects.equals(boards, personDTO.boards);
    }

    @Override
    public int hashCode() {
        return Objects.hash(firstName, lastName, boards);
    }

    @Override
    public String toString() {
        return "PersonDTO{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", boards=" + boards +
                '}';
    }
}
