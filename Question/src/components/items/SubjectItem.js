import React, { Component } from 'react'
export default class SubjectItem extends Component {
  
    // extractSubjects()
    onSubjectChange = (e) => {
        
        this.props.selectedSubject(e.target.value);
        this.props.getQuestions(e.target.value)
    }
    // function to get strings to uppercase
    upperCase = (item) => item.toUpperCase();
    render() {
        //get subjects from props
        const subjects = this.props.questions.map((questions) => questions.subject);
        // make all values upper case
        const upSubjects = subjects.map(this.upperCase);
        // Eliminate doubles using a set and casting it back to array
        const subjectSet = [...new Set(upSubjects)];

        return (
            <select className="subjectItem" onChange={this.onSubjectChange} >

                <option >ALL</option>
                {subjectSet.map((subject) => (<option key={subject}>{subject}</option>))}
                }
            </select>
        )
    }
}
