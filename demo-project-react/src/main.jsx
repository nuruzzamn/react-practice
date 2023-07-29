//import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/*
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <h1>hello</h1>
  </React.StrictMode>
)*/

const todoTitle = " todo title"
const todoDes ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, in.";
const date = new Date();
const currentDate= date.getDate();
const currentMonth= String(date.getMonth() + 1);
const currentYear= date.getFullYear();
const currentMinute= date.getMinutes()
const currentHour= date.getHours();
const currenAmPm= currentHour >=12? "PM" : "AM";

// variable decleare for inline css
const headingStyle1 ={
  backgroundColor : "purple",
  color : "white", 
  fontSize :"2rem",
  textAlign :"center",
  padding : "15px"
}


ReactDOM.createRoot(document.getElementById('root')).render(

  <div>
    {/* using variable inline css */}
    <h1 style={headingStyle1}> Todo App </h1>

    {/* using outer css from stylesheet */}
    <h1 className='headingstyle'> {todoTitle} </h1>
    <p className='headingstyle2'>{todoDes}</p>
    {/* using inline css */}
    <p1 style={{color : "blue", fontSize :"2rem" }}> {currentDate}/{currentMonth}/{currentYear} <span></span> <b>{currentHour}:{currentMinute} <span></span>{currenAmPm}</b> </p1>

    <p>{}</p>
  </div>
      

)