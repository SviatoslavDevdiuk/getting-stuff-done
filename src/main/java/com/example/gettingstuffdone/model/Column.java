package com.example.gettingstuffdone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;
import java.util.Objects;

@Entity
public class Column {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @javax.persistence.Column
    private Long id;

    @javax.persistence.Column
    private String name;

    @javax.persistence.Column
    private Byte columnNumber;

    @javax.persistence.Column
    @OneToMany(mappedBy = "column")
    private List<Card> cards;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Byte getColumnNumber() {
        return columnNumber;
    }

    public void setColumnNumber(Byte columnNumber) {
        this.columnNumber = columnNumber;
    }

    public List<Card> getCards() {
        return cards;
    }

    public void setCards(List<Card> cards) {
        this.cards = cards;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Column column = (Column) o;
        return Objects.equals(id, column.id) && Objects.equals(name, column.name) && Objects.equals(columnNumber, column.columnNumber) && Objects.equals(cards, column.cards);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, columnNumber, cards);
    }

    @Override
    public String toString() {
        return "Column{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", columnNumber=" + columnNumber +
                ", cards=" + cards +
                '}';
    }
}
