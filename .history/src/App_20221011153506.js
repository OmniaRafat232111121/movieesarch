const Person=(props)=>{
return(
  <h1>Name:{props.name}</h1>
)
}


function App() {
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
<Person name/>
    </div>
  );
}

export default App;