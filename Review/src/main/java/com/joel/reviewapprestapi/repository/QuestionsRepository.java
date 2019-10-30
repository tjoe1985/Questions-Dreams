package com.joel.reviewapprestapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.joel.reviewapprestapi.model.Questions;

@Repository
public interface QuestionsRepository extends JpaRepository<Questions,Integer>{

}
