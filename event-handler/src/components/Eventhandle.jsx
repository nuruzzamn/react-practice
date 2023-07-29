import React, { Component } from 'react'

export default class Eventhandle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         eventvalue:""
      }
    }

    onchangeHandle = (e) =>{
        this.setState({
            eventvalue : e.target.value
        })
    }
    
  render() {
    return (
      <div>
        {console.log( this.state.eventvalue)} 
        <input type="text" onChange={this.onchangeHandle} />
        <p>{this.state.eventvalue}</p>
      </div>
    )
  }
}
