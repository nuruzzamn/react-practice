//import React from "react"; 
import Card from "./components/Card";
import Data from "./Data.json"


// const todoTitle = " Todo Title"
// const todoDes ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, in.";
// const date = new Date();
// // const currentDate = date.getDate(); 
// // const currentMonth = String(date.getMonth() + 1);
// // const currentYear = date.getFullYear();
// const currentMinute = date.getMinutes();
// const currentHour = date.getHours();
// const currenAmPm = currentHour >= 12 ? "PM" : "AM";

function App(){
    
    // console.log(Data);

    // const item =[];

    // for (let i=0; i<Data.length; i++){
    //     item.push(<Card titleText={Data[i].title} desText={Data[i].description} desDate={currentHour +":"+ currentMinute +":"+currenAmPm}/>)
    // }

    // return <div>
    //     {/* practice for props compont data
    //     <h1 className='headingstyle'> Todo App </h1>
    //     <Card titleText="Title 1" desText="description 1 data" desDate={currentHour +":"+ currentMinute +":"+currenAmPm}/>
    //     <Card titleText="Title 2" desText="description 2 data" desDate={currentHour +":"+ currentMinute +":"+currenAmPm}/>
    //     <Card titleText="Title 3" desText="description 3 data" desDate={currentHour +":"+ currentMinute +":"+currenAmPm}/> */}

    //     {/* using data from data.json */}
    //     <h1 className='headingstyle'> Todo App </h1>
    //     {/* <Card titleText={Data[0].title1} desText={Data[0].description1} desDate={currentHour +":"+ currentMinute +":"+currenAmPm}/>
    //     <Card titleText="Title 2" desText="description 2 data" desDate={currentHour +":"+ currentMinute +":"+currenAmPm}/>
    //     <Card titleText="Title 3" desText="description 3 data" desDate={currentHour +":"+ currentMinute +":"+currenAmPm}/> */}

    //     {item}

    // </div>

    /////////////
    /////////////
    // code for collect data usning mapping 
    // let item =[];
    // item= Data.map((item)=> <Card titleText={item.title} desText={item.description}/>);
    return <div>
       
        <h1 className='headingstyle'> Todo App </h1>
       {/* {item} */}
       {Data.map((item, index)=> 
       <Card key={index} titleText={item.title} desText={item.description}/>)}

    </div>


}

export default App;