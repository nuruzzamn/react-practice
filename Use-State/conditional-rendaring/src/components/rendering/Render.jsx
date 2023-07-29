import HomePage from '../HomePage'
import LoginPage from '../LoginPage'
import React, { Component } from 'react'

export default class render extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn : false
      }
    }

  render() {
    
            // Using if else
            // if (this.state.isLogedIn){
            //     return <HomePage />
            // } else {
            //     return <LoginPage />
            // }

            /////
            // using elment
            // const {isLogedIn}=this.state;
            // let element;

            // if(isLogedIn){
            //     element = <HomePage />
            // } else{
            //     element = <LoginPage />
            // }
            // return element;
            
            //using with ternary operator
            const {isLogedIn}=this.state;

            console.log(isLogedIn)
             let element;

             element =isLogedIn ? <HomePage /> :<LoginPage />
             return element

        //     return <div>
        //     {isLogedIn ? (
        //       <HomePage />
        //     ) : (
        //       <LoginPage />
        //     )}
        //   </div>
            
  }
}

