package com.example.gettingstuffdone.repository;

import com.example.gettingstuffdone.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Long> {


}
