import React, { Component } from 'react'

import  '../../src/App.css';
import QuestionItem from './items/QuestionItem';

export default class DeleteQuestions extends Component {
    state={
       //tells questions item what buttons to thisplay 
        showBtns:{ 
        showAnswer:true,
        showUpdate:false,
        showDelete:true
       }
    }
  

    render() {
        // const { id, subject, question, answer } = this.props.questions;
        return this.props.questions.map((question) => (
            <React.Fragment key={question.id}>
                <QuestionItem showBtns={this.state.showBtns} key={question.id} deleteQuestion={this.props.deleteQuestion} questions={question} />
              </React.Fragment>
        ));



    }
}

  
