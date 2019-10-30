import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import  '../../src/App.css';
export default class AddQuestions extends Component {
    constructor(){
        super();
        this.textRef=React.createRef();
    }
    state={
        question:'',
        answer:'',
        subject:'',
       

    }
    //on submit pass state values as prop and clear for next submision
    onsubmit =(e)=>{
        console.log("On submit from addQuestions fires");
        //prevent default submit method
        e.preventDefault();
        //pass ass props
        this.props.addQuestions(this.state.question,this.state.answer,this.state.subject);
        //cleare state after passing values to props
       
        this.setState({question:'',answer:'',subject:''});
        // focus on question input fill 
        this.textRef.current.focus();
        console.log("On submit from addQuestions Endsss");
    }
    //updates the state on change to keep values ready for submision
    onchange=(e)=> this.setState({[e.target.name]:e.target.value});
    render() {
        
        return (
            <div className="addQuestionsDiv">
               <form>
                   <input className="inputQuestion" onChange={this.onchange} type="text" name="question" 
                          placeholder="Enter Question" value={this.state.question} ref={this.textRef}                          
                          >
                             
                    </input><br/>
                   
                   <input className="inputQuestion" onChange={this.onchange} type="text" name="answer" 
                          placeholder="Enter Answer" value={this.state.answer}>
                    </input><br/>
                   
                   <input className="inputQuestion" onChange={this.onchange} type="text" name="subject"
                          placeholder="Subject" value={this.state.subject} >
                    </input><br/>
                   
                   <input className="btn" onClick={this.onsubmit} type="submit" value="Add Questions" ></input>
                   <Link  to="/questions"><input className="btn" type="submit" value="Done" ></input></Link>
               </form>
            </div>
        )
    }
}
