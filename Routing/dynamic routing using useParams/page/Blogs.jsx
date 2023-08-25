import React, {useState} from 'react'
import { BlogData } from '../src/BlogsData'
import { Link } from 'react-router-dom'

const Blogs = () => {
    const [blogs, setblogs] = useState(BlogData)

    const turncateString = (str, num) => {
        if (str.length > num){
            return str.slice(0, num) + "..."
        } else {
            return str
        }
    }

  return (
    <>
    <h1>Blogs</h1>
    
    <section>
        {blogs.map((blog)=>{
            const {id, title, body} = blog

            return <article key = {id}>
                    <h2>{title}</h2>
                    <p>{turncateString(body, 100)}</p>
                    <Link to= {title}> Learn More </Link>
            </article>
        })}
    </section>
    
    </>
  )
}

export default Blogs