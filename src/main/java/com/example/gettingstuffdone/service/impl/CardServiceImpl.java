package com.example.gettingstuffdone.service.impl;

import com.example.gettingstuffdone.controller.request.CardRequest;
import com.example.gettingstuffdone.model.Card;
import com.example.gettingstuffdone.repository.CardRepository;
import com.example.gettingstuffdone.service.CardService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardServiceImpl implements CardService {

    private final CardRepository cardRepository;

    private static final Logger LOG = LoggerFactory.getLogger(CardServiceImpl.class);
    @Autowired
    public CardServiceImpl(final CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    @Override
    public Card createCard(CardRequest request) {
        Card cardToSave = new Card(request.getId(), request.getTitle(), request.getContent(), request.getColumnId());
        LOG.info("service level: ");
        LOG.info(cardToSave.toString());
        cardRepository.save(cardToSave);
        return cardToSave;
    }
}
