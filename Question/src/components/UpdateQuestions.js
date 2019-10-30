import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class UpdateQuestions extends Component {
    questtion= this.props.updateQuest;
    state={
        id:this.questtion.id,
        question:this.questtion.question,
        answer:this.questtion.answer,
        subject:this.questtion.subject
      }
    //on submit pass state values as prop and clear for next submision
    onsubmit =(e)=>{
      
        
    }
    //updates the state on change to keep values ready for submision
     onchange=(e)=> this.setState({[e.target.name]:e.target.value});
    //this will run every time the component is redirected or unmounted
    componentWillUnmount = () => {
        console.log("On componentWillUnmount from addQuestions fires");
      //pass ass props
        this.props.updateQuestion(this.state);
       
        this.setState({id:'',question:'',answer:'',subject:''});
        console.log("On componentWillUnmount from addQuestions Endsss");
    }
    render() {
       
        return (
            
            <div className="addQuestionsDiv">
               <form>
               <input className="inputQuestion" onChange={this.onchange} type="hidden" name="id" 
                          value={this.state.id}>
                    </input><br/>
                   <input className="inputQuestion" onChange={this.onchange} type="text" name="question" 
                          placeholder="Enter Question" value={this.state.question}>
                    </input><br/>
                   
                   <input className="inputQuestion" onChange={this.onchange} type="text" name="answer" 
                          placeholder="Enter Answer" value={this.state.answer}>
                    </input><br/>
                   
                   <input className="inputQuestion" onChange={this.onchange} type="text" name="subject"
                          placeholder="Subject" value={this.state.subject} >
                    </input><br/>
                   {/* link not working */}
                   <Link  to="/questions"><input className="btn" type="submit" value="Update" ></input></Link>
                   <Link  to="/questions"><input className="btn" type="submit" value="Cancel" ></input></Link>
               </form>
            </div>
        )
    }
}