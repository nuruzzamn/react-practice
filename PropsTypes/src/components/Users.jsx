import React, {useState} from 'react'
import PropTypes from 'prop-types'
import User from './User'

const Users = props => {
    // const [userName, setUserName] = useState ()
    // const [userId, setUserId] = useState ()

    const [userData, setUserData] = useState ({
        id :100000,
        name: 'zaman',
    })


  return (
    // <div>users</div>
    // <User userName={userName} userId={userId}/>

    <User userData={userData}/>

  )
}

Users.propTypes = {
    
}

export default Users