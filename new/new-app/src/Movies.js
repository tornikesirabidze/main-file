import React, {useEffect, useState} from "react";




function Inputchange({getMovies}){
    
    const [inputvalue, setinputvelue]=useState("");

    const Changevalue=function(e){
        setinputvelue(e.target.value)
      }         

    const handleSearc =function(){
        getMovies(inputvalue)
        getMovies("")
    }

    return(
        <div>
            <h1>Movies</h1>
            <input type="text" value={inputvalue} onChange={Changevalue}></input>
            {inputvalue ?<button onClick={handleSearc} >search</button>: null}
        </div>
    )
}
 
function Movies(){
    const[moviesarr,setmoviesarr]=useState([])
    
    const MovieGid =function({movie}){
        return(
            <div>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {moviesarr.map((movie, index) => (
                        <li key={index} style={{ margin: '10px 0', borderBottom: '1px solid #ccc', padding: '10px 0' }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {movie.Poster !== "N/A" && <img src={movie.Poster} alt={movie.Title} style={{ width: '100px', marginRight: '20px' }} />}
                                <div>
                                    <h3>{movie.Title}</h3>
                                    <p>Year: {movie.Year}</p>
                                    <p>Type: {movie.Type}</p>
                                    {movie.details && (
                                        <>
                                            <p>Director: {movie.details.Director}</p>
                                            <p>Actors: {movie.details.Actors}</p>
                                            <p>Plot: {movie.details.Plot}</p>
                                        </>
                                    )}
                                </div>
                                {!movie.details && (
                                    <button onClick={() => Movies(movie.imdbID)} style={{ marginLeft: '10px' }}>Details</button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
    
        )
    }


    const getMovies = function(name){
        fetch(`http://www.omdbapi.com/?apikey=48117784&s=${name}`)
        .then(res=> res.json())
        .then(moviesData=> {
            setmoviesarr(moviesData.Search)
            console.log(moviesarr)
        })
        // .catch(error => {
        //         console.error('Error fetching movies:', error);
        //     });

        
    }



    useEffect(function(){
        getMovies("movie")
    }, [])

    return(
        <div>
            <Inputchange getMovies={getMovies}></Inputchange>
            {moviesarr ? < MovieGid movies={moviesarr}></MovieGid>: "loading"}
            
           
        </div>
    )

}



export default Movies;