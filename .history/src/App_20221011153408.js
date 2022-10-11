const Person=()

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
    </div>
  );
}

export default App;
