import React, { Component } from 'react'
import QuestionItem from './items/QuestionItem';


export default class Questions extends Component {
    state = {

        //tells questions item what buttons to thisplay 
        showBtns: {
            showAnswer: true,
            showUpdate: true,
            showDelete: false
        }
    }
  
    render() {
        return( 
            this.props.questions.map((question) => (
            <QuestionItem showBtns={this.state.showBtns} onUpdateClick={this.props.onUpdateClick} key={question.id} questions={question} />
            ))
            
           
    );
    }
}
