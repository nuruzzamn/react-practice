import Binding from "./components/Binding"
import Eventbubling from "./components/Bubling"
import Eventhandle from "./components/Eventhandle"
import StateDemo from "./components/StateDemo"
import UpdateState from "./components/UpdateState"
import Bubling from "./components/Bubling"
import Controlledcomponent from "./components/Controlledcomponent"
import Usestatewithobject from "./components/Usestatewithobject"
import Childdemo from "./components/state-lifting/Childdemo"





const ChildLifting=(props)=> {
  

  return (
    <div>
      <div>App {props.title}</div>

    </div>
    
  )
}

const HandleChild=(dataChild)=>{
      console.log(dataChild)
}


function App() {
  
  // {/* code practice for state-lifting */}
  let data = `(APP) Now i am from parent`

  //   const handleChild=(childData)=>{
  //   console.log(childData)
  //   return <div>
  //     <p>{childData}</p>
  //   </div>

  // code for more state lifting
  
  return (
    <>
     {/* <Eventhandle />
     <Binding /> */}

     {/* <StateDemo /> */}

     {/* <UpdateState /> */}

     {/* <Bubling /> */}

     {/* <Controlledcomponent /> */}

     {/* <Usestatewithobject /> */}

     {/* code practice for state-lifting */}
     <div>
    
     <Childdemo dataProp= {data} onChildData={HandleChild}/>
     <handleChild />

     {/* code for more on state lifting */}

     <ChildLifting title={"hi i am from parent"} onChildHandel={ChildLifting}/>

     </div>
    
    </>
  )
}

export default App
