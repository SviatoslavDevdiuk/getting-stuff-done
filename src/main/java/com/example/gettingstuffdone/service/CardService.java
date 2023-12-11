package com.example.gettingstuffdone.service;

import com.example.gettingstuffdone.controller.request.CardRequest;
import com.example.gettingstuffdone.model.Card;

public interface CardService {

    Card createCard (CardRequest request);

}
