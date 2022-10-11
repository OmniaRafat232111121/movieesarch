import React,{useEffect,useState} from 'react'
import './App.css'
import MovieCard from './MovieCard';
import SearchIcon from "./search.sv";
const API_URL='http://www.omdbapi.com/?i=tt3896198&apikey=34eadd88'
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
         src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;




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
