import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import MovieCard from "./MovieCard";
function Search(){

    const [movie,setMovie] = useState();
    const [name,setName] = useState("");
    const [year,setYear] = useState("");
    const [searched,setSearched] = useState(false);

    const getMovies = () =>{
        fetch("https://www.omdbapi.com/?apikey=3398f763&t="+name+">&y="+year).then((response)=>{
            return response.json();
        }).then(data=>{
            console.log(data);
            if(data.Error){
                const noMovie = {
                    Title:"No movie found",
                    Poster:"Na",
                    Ratings:[{Value:"No rating", Source:"NA"}]
                }
                setMovie(noMovie)
            }else{
                setMovie(data);
            }
            setSearched(true);
        });
    }
    return(
        <div style={{"paddingTop":"5rem"}}>
                  <h1 style={{fontFamily:"sans-serif", color:"white"}}>PeliBiblioteca</h1>

            <div>
            <input type="text"  onChange={(e)=>setName(e.target.value)}></input>
            <input type="number" onChange={(e)=>setYear(e.target.value)}></input>
            <Button variant="info" onClick={getMovies}>Buscar</Button>
            </div>
            <div style={{"paddingLeft":"5rem"}}>

                {searched && <MovieCard movie={movie}></MovieCard>}
                
            </div>
        </div>
    )
}
export default Search;