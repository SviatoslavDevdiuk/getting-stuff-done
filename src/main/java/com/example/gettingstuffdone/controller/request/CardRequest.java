package com.example.gettingstuffdone.controller.request;

public class CardRequest {


    public String id;
    public String title;
    public String content;
    public String columnId;

    public CardRequest(String id, String title, String content, String columnId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.columnId = columnId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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


}
