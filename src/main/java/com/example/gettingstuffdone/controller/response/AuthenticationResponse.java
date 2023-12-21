package com.example.gettingstuffdone.controller.response;

import org.springframework.http.HttpStatus;

public class SignupResponse {

    private HttpStatus httpStatus;
    private String errorMessage;

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public void setHttpStatus(HttpStatus httpStatus) {
        this.httpStatus = httpStatus;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    @Override
    public String toString() {
        return "SignupResponse{" +
                "httpStatus=" + httpStatus +
                ", errorMessage='" + errorMessage + '\'' +
                '}';
    }
}
