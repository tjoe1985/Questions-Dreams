package com.joel.reviewapprestapi.controllers;

import java.sql.SQLException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.joel.reviewapprestapi.model.Questions;
import com.joel.reviewapprestapi.service.QuestionsServices;


@RestController
@CrossOrigin(origins ="http://localhost:3000", allowCredentials = "true")
public class QuestionController {

	@Autowired
	QuestionsServices questionService;
	
	//CRUD
	//create
	@PostMapping("/questions/add")
	public Questions addQuestions(@RequestBody Questions question)throws SQLException{
		Questions newQuestion = questionService.addQuestion(question.getSubject().toUpperCase(), question.getQuestion(), question.getAnswer());
		
		return newQuestion;
	}
	
	//read
	
	@GetMapping("/questions")
	public ResponseEntity<?> getQuestions() {
		if (questionService.getQuestions().isEmpty()) {
			return ResponseEntity.noContent().build();// no content
		}
		return ResponseEntity.ok(questionService.getQuestions());
		
	}
	//update
	@PutMapping("/questions/update")
	public ResponseEntity<?> updateQuestion(@RequestBody Questions question){
		Questions updateQuestion = questionService.updateQuestion(question);
		return ResponseEntity.ok(updateQuestion);
	}
	//delete
	@DeleteMapping("/questions/delete/{questionId}")
	public ResponseEntity<?> deleteQuestion(@PathVariable String questionId){

		Questions deleteQuestion = questionService.deleteQuestion(Integer.parseInt(questionId));
		
		if (deleteQuestion ==null) {
			return ResponseEntity.noContent().build();// no content
		}
		return ResponseEntity.ok(deleteQuestion);
	}
	
}
