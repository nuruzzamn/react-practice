

const users= [
  {
    fullName:"zaman",
    age: 30,
    phone:[
      {
        home: "017",
        office: "016"
      }
    ]
  },

  {
    fullName:"nur",
    age: 35,
    phone:[
      {
        home: "01777777",
        office: "016666"
      }
    ]
  }
]

function App() {
  return <div>
    <h1>Nested Mapping</h1>
    {
      users.map((user, index)=> (
        <article key={index}>
          <h2>{"Name :" + user.fullName + "  Age :"+ user.age}</h2>
          {
            user.phone.map((phone, index)=>{
              return <div  key= {index}>
                      <p>{phone.home}</p>
                      <p>{phone.office}</p>
              </div>
            })
          }
        </article>
      ))
    }
    
  </div>
}

export default App
