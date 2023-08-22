import React from 'react'
import User from './User'

const Users = ({userData}) => {

    // console.log("Users",userData)
  return (
    <>
    <section>
        {userData.map(user =>
             <User key={user.id} userData={user}/>
    )}
    </section>
       
    </>
  )
}

export default Users