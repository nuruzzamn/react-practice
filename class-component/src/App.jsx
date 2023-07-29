import Card1 from "./component/card1"
import Card2 from "./component/card2"

function App() {

  return (
   <div>
    <Card1 title= "card1 title" des="card1 description"/>
    <Card2 tiltleName="from card 2 props" des="des card 2" id="123"/>
   </div>
  )
}

export default App
