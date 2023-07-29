//import React from "react";
import uniqid from 'uniqid'

const todos=[
    {
        id: uniqid(),
        title: "todos1",
        des: "todos1 description"
    },

    {
        id: uniqid(),
        title: "todos2",
        des: "todos2 description"
    },

    {
        id: uniqid(),
        title: "todos3",
        des: "todos3 description"
    },

    {
        id: uniqid(),
        title: "todos4",
        des: "todos4 description"
    }
]

function List(){
   
    return <div>
        {
             todos.map((todo, index)=> {
                const {title, des, id} = todo;
             
          return ( <div key={index}>
                    <h1 >{title}</h1>
                    <h1 >{des}</h1>
                    <h3>{id}</h3>
                </div>
             )} )
        }
    
    </div>
}

export default List;