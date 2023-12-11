package com.example.gettingstuffdone.controller;

import com.example.gettingstuffdone.controller.request.CardRequest;
import com.example.gettingstuffdone.model.Card;
import com.example.gettingstuffdone.process.CardProcess;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/card")
public class CardController {

private final CardProcess cardProcess;

@Autowired
public CardController(final CardProcess cardProcess){
    this.cardProcess = cardProcess;
}
    private final Logger LOG = LoggerFactory.getLogger(CardController.class);


    @RequestMapping("/create")
    public ResponseEntity<Card> createCard(@RequestBody CardRequest cardRequest) {
        LOG.info("Get create card request, body: {}", cardRequest.toString());
        return new ResponseEntity<>(cardProcess.createCard(cardRequest), HttpStatus.CREATED);
    }

}
