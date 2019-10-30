package com.joel.reviewapprestapi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Questions {
	@Id
	@GeneratedValue
	private int id;
	@Size(min = 2, message = "Subject should have a minimum of 2 characters")
	private String subject;
	@Size(min = 5, message = "Question should have a minimum of 5 characters")
	private String question;
	@Size(min = 5, message = "Answer should have a minimum of 5 characters")
	private String answer;
	public Questions() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Questions(@Size(min = 2, message = "Subject should have a minimum of 2 characters") String subject,
			@Size(min = 5, message = "Question should have a minimum of 5 characters") String question,
			@Size(min = 5, message = "Answer should have a minimum of 5 characters") String answer) {
		super();
		this.subject = subject;
		this.question = question;
		this.answer = answer;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getQuestion() {
		return question;
	}
	public void setQuestion(String question) {
		this.question = question;
	}
	public String getAnswer() {
		return answer;
	}
	public void setAnswer(String answer) {
		this.answer = answer;
	}
	@Override
	public String toString() {
		return "Questions [id=" + id + ", subject=" + subject + ", question=" + question + ", answer=" + answer + "]";
	}
	
	
	
}
