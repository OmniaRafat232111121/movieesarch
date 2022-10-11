import React,{useState} from 'react'
const Person=(props)=>{
return(
  <h1>Name:{props.name}</h1>
  
)
}


function App() {
  const [counter,setCounter]=useState(0);
  const name='omnia'
  const isNamingShow=true;
  return (
    <div>
  <h1>Hello</h1>
  {name ?
  (
    <h1>Good</h1>
  ):(
    <h1>Bad</h1>
  )
}
<Person name="salma"/>
<h1>{counter}</h1>
<button onClick={()=>setCounter((c))}>increment</button>
<button onClick={()=>setCounter()}>increment</button>
    </div>
  );
}

export default App;
