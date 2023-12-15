package com.example.gettingstuffdone.model;


import javax.persistence.*;
import java.util.Objects;

@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cardNumber;

    private String title;

    private String content;

    private String columnNumber;

    @ManyToOne
    @JoinColumn(name = "column_id")
    private Column column;



    public Card() {
    }

    public Card(String cardNumber, String title, String content, String columnNumber) {
        this.cardNumber = cardNumber;
        this.title = title;
        this.content = content;
        this.columnNumber = columnNumber;
    }

    public Long getId() {
        return id;
    }


    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getColumnNumber() {
        return columnNumber;
    }

    public void setColumnNumber(String columnNumber) {
        this.columnNumber = columnNumber;
    }

    public Column getColumn() {
        return column;
    }

    public void setColumn(Column column) {
        this.column = column;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Card card = (Card) o;
        return Objects.equals(id, card.id) && Objects.equals(cardNumber, card.cardNumber) && Objects.equals(title, card.title) && Objects.equals(content, card.content) && Objects.equals(columnNumber, card.columnNumber) && Objects.equals(column, card.column);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, cardNumber, title, content, columnNumber, column);
    }

    @Override
    public String toString() {
        return "Card{" +
                "id=" + id +
                ", cardNumber='" + cardNumber + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", columnNumber='" + columnNumber + '\'' +
                ", column=" + column +
                '}';
    }
}
