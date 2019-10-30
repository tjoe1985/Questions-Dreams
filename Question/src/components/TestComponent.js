import React, { Component } from 'react'

export default class TestComponent extends Component {
    state = {
        show: true
      };
    
      showhide = () => {
        this.setState({ show: !this.state.show });
        alert(this.state.show);
      };
    render() {
        return (
            <div className="App">
            {this.state.show && 'jkl;lkj'}
            asdfasdfasdf
            <button onClick={this.showhide}>Show Hide</button>
          </div>
        )
    }
}
