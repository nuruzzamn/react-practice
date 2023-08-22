import './App.css'
import Component1 from '../components/Component1'
import { UseContext } from '../components/usingUseContext/UseContext'

function App() {

    const name = {id: 1,
                  userName: 'zaman'} 
              
    const home = {number: 10,
                  homeName: 'zaman villa'} 
  return (
    <>
    {/* wrappng with child */}
      <UseContext.Provider value={{name, home}}>
          <Component1 />
      </UseContext.Provider>

      {/* <Component1 name={name}/> */}
    </>
  )
}

export default App
