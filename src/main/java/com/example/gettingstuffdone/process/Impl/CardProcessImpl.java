package com.example.gettingstuffdone.process.Impl;

import com.example.gettingstuffdone.controller.request.CardRequest;
import com.example.gettingstuffdone.model.Card;
import com.example.gettingstuffdone.process.CardProcess;
import com.example.gettingstuffdone.service.CardService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardProcessImpl implements CardProcess {

    private final CardService cardService;

    private static final Logger LOG = LoggerFactory.getLogger(CardProcessImpl.class);
    @Autowired
    public CardProcessImpl(final CardService cardService){
        this.cardService = cardService;
    }
    @Override
    public Card createCard(CardRequest request) {
        LOG.info("process level");
        LOG.info(request.toString());
        return cardService.createCard(request);
    }
}
