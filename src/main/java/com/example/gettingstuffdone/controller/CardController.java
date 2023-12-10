package com.example.gettingstuffdone.controller;

import com.example.gettingstuffdone.controller.request.CardRequest;
import com.example.gettingstuffdone.model.Card;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("http://localhost:8080")
public class CardController {


    private final Logger LOG = LoggerFactory.getLogger(CardController.class);

    public CardController() {
    }

    @RequestMapping("/card/create")
    public List<Card> createCard(@RequestBody CardRequest cardRequest) {
        LOG.info("Get create card request, body: {}", cardRequest.toString());
        return null;
    }

}
