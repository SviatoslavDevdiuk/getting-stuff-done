package com.example.gettingstuffdone.process;

import com.example.gettingstuffdone.controller.request.CardRequest;
import com.example.gettingstuffdone.model.Card;

public interface CardProcess {

    Card createCard (CardRequest request);
}
