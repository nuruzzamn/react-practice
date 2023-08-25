import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BlogData } from '../src/BlogsData'

const Blog = () => {

  const {title} = useParams()

  const [BodyData, setBodyData] = useState("")

  useEffect(() => {
    const filterTitle= BlogData.filter((blog)=> blog.title === title)
    setBodyData(filterTitle[0].body)
  }, [])

  return (
    <>
    <h1>{title} Page </h1>
    <p>{BodyData.slice(0,500)}</p>
    </>
  )
}

export default Blog