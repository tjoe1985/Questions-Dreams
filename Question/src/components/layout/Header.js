import React from 'react'
import {Link} from 'react-router-dom';

export default function header() {
    return (
        <div style={headerStyle}>

            <h1>Questions & Dreams</h1>
            <Link  to="/questions"><input className="headerBtn" type="submit" value="View Questions" ></input></Link>
            <Link  to="/questions/add"><input className="headerBtn" type="submit" value="Add Question" ></input></Link>
            <Link  to="/questions/delete"><input className="headerBtn" type="submit" value="Delete Question" ></input></Link>
            
            
           
        </div>
    )
}

const headerStyle={
    background:'#444444',
    textAlign:'center',
    borderRadius: '85px 85px 25px 25px'
}