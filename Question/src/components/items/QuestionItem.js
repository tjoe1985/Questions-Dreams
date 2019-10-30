import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import  '../../../src/App.css';
export default class QuestionItem extends Component {
    btns = this.props.showBtns;
    state = {
       
        show: false,
        buttonText: 'Show Answer',
        //tells questions item what buttons to thisplay 
        showBtns:{ 
            showAnswer:this.btns.showAnswer,
            showUpdate:this.btns.showUpdate,
            showDelete:this.btns.showDelete
           }
      };
    
      showhide = () => {
        this.setState({ show: !this.state.show,
        buttonText: (this.state.show) ? "Show Answer" : "Hide Answer"
        });
        
        
      };
    render() {
        //getting info out of questions
        const { id,  question, answer } = this.props.questions;
        return (
            <div className="questionContainer">
                <div  className='question'>
                    <p>{question}</p>
                    <div className="itemsBtnDiv">
                         {this.state.showBtns.showAnswer  && <button  onClick={this.showhide} className="btn" >{this.state.buttonText}</button>}
                         {this.state.showBtns.showDelete && <button  onClick={this.props.deleteQuestion} className="btn" value={id}>Delete</button>}
                         {this.state.showBtns.showUpdate &&<Link  to="/questions/update"><button  onClick={this.props.onUpdateClick} className="btn" value={id}>update</button></Link>}
                    </div>
                </div>
                
                <div  className='answer'>
                    <p >{this.state.show &&  answer}</p>
                </div>
            </div>
        )
    }
}

 



 
