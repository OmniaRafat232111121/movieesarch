import React,{useEffect} from 'react'
//34eadd88
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=34eadd88'
const App = () => {
  const searchMovies=async(title)=>{
  const response=await fetch(`${API_URL}&s=${title}`);
  const data=await response.json();
  con
  }
  useEffect(()=>{

  },[])
  return (
    <div>
      
    </div>
  )
}

export default App




// import {useState,useEffect} from 'react'
// const Person=(props)=>{
// return(
//   <h1>Name:{props.name}</h1>
  
// )
// }


// function App() {
//   const [counter,setCounter]=useState(0);
//   const name='omnia'
//   const isNamingShow=true;
//     useEffect(()=>{
//       setCounter(100);
//     },[counte])
//   return (
//     <div>
//   <h1>Hello</h1>
//   {name ?
//   (
//     <h1>Good</h1>
//   ):(
//     <h1>Bad</h1>
//   )
// }
// <Person name="salma"/>
// <h1>{counter}</h1>
// <button onClick={()=>setCounter((c)=>c+1)}>increment</button>
// <button onClick={()=>setCounter((c)=>c-1)}>decrement</button>
//     </div>
//   );
// }

// export default App;
