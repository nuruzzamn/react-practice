import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { BlogData } from '../BlogsData'


const Blog = () => {

  // const {title} = useParams()

  const stateLocation = useLocation();

  console.log("locatiion ", stateLocation)

  // const [BodyData, setBodyData] = useState("")

  // useEffect(() => {
  //   const filterTitle= BlogData.filter((blog)=> blog.title === title)
  //   setBodyData(filterTitle[0].body)
  // }, [])

  return (
    <>
    <h1>{stateLocation.state.title} Page </h1>
    <p>{stateLocation.state.body}</p>
    </>
  )
}

export default Blog