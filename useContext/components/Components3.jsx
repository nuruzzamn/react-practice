import React, {useContext} from 'react'
import { UseContext } from './usingUseContext/UseContext'

const Components3 = () => {

    const user = useContext(UseContext)

    const {name, home}=user

    console.log(home)
  return (
    <div>
        <h1>Name : {name.userName}</h1>
        <p>Name Id: {name.id}</p>
        <h1>Home Name: {home.homeName}</h1>
        <p>Home number: {home.number}</p>

    </div>
  )
}

export default Components3 