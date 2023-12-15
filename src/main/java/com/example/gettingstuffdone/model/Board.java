package com.example.gettingstuffdone.model;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;

@Entity
public class Board {


    @Id
    @javax.persistence.Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @javax.persistence.Column
    private String name;

    @javax.persistence.Column
    private Byte boardNumber;

    @OneToMany
   @JoinColumn(name = "board_id")
    private List<Column> columns;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Byte getBoardNumber() {
        return boardNumber;
    }

    public void setBoardNumber(Byte boardNumber) {
        this.boardNumber = boardNumber;
    }

    public List<Column> getColumns() {
        return columns;
    }

    public void setColumns(List<Column> columns) {
        this.columns = columns;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Board board = (Board) o;
        return Objects.equals(id, board.id) && Objects.equals(name, board.name) && Objects.equals(boardNumber, board.boardNumber) && Objects.equals(columns, board.columns);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, boardNumber, columns);
    }

    @Override
    public String toString() {
        return "Board{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", boardNumber=" + boardNumber +
                ", columns=" + columns +
                '}';
    }
}
