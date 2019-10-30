import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/layout/Header';
import Questions from './components/Questions';
import AddQuestions from './components/AddQuestions';
import UpdateQuestions from './components/UpdateQuestions';
import DeleteQuestions from './components/DeleteQuestions';
import SubjectItem from './components/items/SubjectItem';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      questPool: [],
      questToDisplay: [],
      updateQuest: {},
      selectedSubject: "ALL"
    }
    this.getQuestions = this.getQuestions.bind(this)
  }


  componentDidMount() {
    this.getQuestions();
  }

  getQuestions() {
    const pass = '123';
    const user = 'joel123';
    const url = 'http://localhost:8080/questions'
    axios.get(url, {
      withCredentials: true,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }, { auth: { username: user, password: pass } }).catch(err => err).then(response => {
      //pass parameter to getQuestions method based on it deside what values quest will get. 
      this.setState({ questPool: response.data });
      console.log(this.state.selectedSubject + " :from getquestions method")
      if (this.state.selectedSubject === "ALL") {
        this.setState({ questToDisplay: this.state.questPool });
      } else {
        //this.state.quest.filter((question)=> question.id == questionId)
        this.setState({ questToDisplay: this.state.questPool.filter(
          (question) => question.subject == this.state.selectedSubject) });
      }


    });
  }
  selectedSubject = (subject) => {
    this.setState({ selectedSubject: subject });
    console.log("selectedSubject running" + subject);
  }
  addQuestions = (question, answer, subject) => {
    console.log("addQuestions from App.js fires");
    const pass = '123';
    const user = 'joel123';
    const url = 'http://localhost:8080/questions/add'

    const quest = {
      question,
      answer,
      subject: subject.toUpperCase()
    }
    axios.post(url, quest,
      { auth: { username: user, password: pass } }).catch(err => err)
      .then(response => this.setState({
        questToDisplay: [...this.state.questToDisplay, response.data],
        questPool: [...this.state.questPool, response.data]
      })
      );


    console.log("addQuestions from App.js fires");
  }
  deleteQuestion = (event) => {
    console.log("deletequestion from app.js fires");
    const val = event.target.value;
    console.log(val);
    const pass = '123';
    const user = 'joel123';
    const url = 'http://localhost:8080/questions/delete/';
    axios.delete(url + val, { auth: { username: user, password: pass } }).then(() => { this.getQuestions() }).catch(err =>
      console.log(err)
    );
    this.getQuestions();
    console.log("deletequestion from app.js Ends");
  }
  onUpdateClick = (event) => {
    console.log("onUpdateClick from app.js fires");
    //get target id
    const questionId = event.target.value;

    // use [0] to return just the object found not the array containing it. 
    const questionObjt = this.state.questToDisplay.filter((question) => question.id == questionId)[0];

    this.setState({ updateQuest: questionObjt })
    console.log("onUpdateClick from app.js ends");
  }
  updateQuestion = (updatedQuestion) => {
    console.log("updateQuestion from app.js starts");

    // console.log(updatedQuestion.subject+'lllll');
    const pass = '123';
    const user = 'joel123';
    const url = 'http://localhost:8080/questions/update';
    axios.put(url, updatedQuestion, { auth: { username: user, password: pass } }).catch(err => err).then(() => { this.getQuestions() });
    this.getQuestions();
    console.log("updateQuestion from app.js ends");
  }

  render() {
    return (
      <Router>

        <div>

          <div>

            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <h1 classname="welcomeMessage">Welcome to Questions && Dreams </h1>
                <p>Please click View Questions to start your journey. </p>
              </React.Fragment>
            )} />
            <Route exact path="/questions" render={props => (
              <React.Fragment>
                <h2 className="questionCount">   Total questions in this Set: {this.state.questToDisplay.length}</h2>
                <SubjectItem getQuestions={this.getQuestions} selectedSubject={this.selectedSubject} questions={this.state.questPool} /><br />
                <Questions getQuestions={this.getQuestions} selectedSubject={this.selectedSubject} onUpdateClick={this.onUpdateClick} questions={this.state.questToDisplay} />
              </React.Fragment>
            )} />
            <Route path="/questions/add" render={props => (
              <React.Fragment>
                <AddQuestions addQuestions={this.addQuestions} />
              </React.Fragment>
            )} />


            <Route path="/questions/update" render={props => (
              <React.Fragment>
                <UpdateQuestions updateQuestion={this.updateQuestion} updateQuest={this.state.updateQuest} />{/*onUpdateClick={this.onUpdateClick} questions={this.state.quest} */}
              </React.Fragment>
            )} />



            <Route path="/questions/delete" render={props => (
              <React.Fragment>
                <DeleteQuestions deleteQuestion={this.deleteQuestion} questions={this.state.questToDisplay} />
              </React.Fragment>
            )} />
          </div>
        </div>
      </Router>
    )
  }
}
