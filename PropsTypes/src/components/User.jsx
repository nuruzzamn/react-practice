import React from 'react'
import PropTypes from 'prop-types'

const User = props => {
  return (
    <div>
        {/* <h1>{props.userName}</h1> */}
        {/* <h3>{props.userId}</h3> */}

        
        <h1>{props.userData.id}</h1>
        <h3>{props.userData.name}</h3>


    </div>
  )
}

User.propTypes = {
    userData: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
    })
}

// User.propTypes = {

//     userName : PropTypes.number,
//     userId : PropTypes.number,

// }

// User.defaultProps = {
//     userName : 'zaman nur',
//     userId: 1213 , 
// }

export default User