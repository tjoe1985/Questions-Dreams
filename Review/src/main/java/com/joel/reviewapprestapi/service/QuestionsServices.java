package com.joel.reviewapprestapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joel.reviewapprestapi.model.Questions;
import com.joel.reviewapprestapi.repository.QuestionsRepository;

@Service
public class QuestionsServices {
	//CRUD
	@Autowired
	QuestionsRepository questionRepository;
	
	//create
	public Questions addQuestion(String subject, String question, String answer) {
		Questions newQuestion = new Questions(subject,question,answer);
		return questionRepository.save(newQuestion);
	}
	
	//read
	public List<Questions> getQuestions(){
		return questionRepository.findAll();
	}
	
	//update
	public Questions updateQuestion(Questions question) {
		//find questions to be updated and deleted replace with current update
		questionRepository.deleteById(question.getId());
		return questionRepository.save(question);
	}
	//delete
	public Questions deleteQuestion(int questionId) {
		Questions toDeleteQuestion = questionRepository.findById(questionId).get();
		questionRepository.delete(toDeleteQuestion);
		return toDeleteQuestion;
	}
	
	
}
