import React, { Component } from 'react'

export default class Binding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
      this.btnclick = this.btnclick.bind(this)
    }

    btnclick(){
        console.log("click")
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        {/* use binding in after function decleare */}
        {/* <button onClick={this.btnclick.bind(this)}> increase </button> */}

        {/* we can also binding in constarctor */}
        <button onClick={this.btnclick}> increase </button>

        <h1>{this.state.count}</h1>
      </div>
    )
  }
}
