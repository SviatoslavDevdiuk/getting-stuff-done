package com.example.gettingstuffdone.model;


import javax.persistence.*;

@Entity
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    public Long id;

    @Column
    public String cardId;

    @Column
    public String title;

    @Column
    public String content;

    @Column
    public String columnId;

    public Card() {
    }

    public Card(String cardId, String title, String content, String columnId) {
        this.cardId = cardId;
        this.title = title;
        this.content = content;
        this.columnId = columnId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setCardId(String cardId) {
        this.cardId = cardId;
    }

    public String getCardId() {
        return this.cardId;
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

    public String getColumnId() {
        return columnId;
    }

    public void setColumnId(String columnId) {
        this.columnId = columnId;
    }

    @Override
    public String toString() {
        return "Card{" +
                "id=" + id +
                ", cardId='" + cardId + '\'' +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", columnId='" + columnId + '\'' +
                '}';
    }
}
