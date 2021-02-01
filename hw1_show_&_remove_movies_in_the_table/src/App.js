import './App.css';
import {getMovies, deleteMovie} from "./services/fakeMovieService";
import { useState } from "react";

function App() {
    let allMovies = getMovies();
    const [movieCount, setMovieCount] = useState(allMovies.length)

    function deleteM(id){
        console.log(id);
        deleteMovie(id);
        setMovieCount(movieCount-1);
    }

    return (
    <main className="container">
        {allMovies.length ? 
            <div>
                <h3>Showing {movieCount} movies in the database</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {allMovies.map(item =>(
                            <tr key={item._id}><td>{item.title}</td><td>{item.genre.name}</td><td>{item.numberInStock}</td><td>{item.dailyRentalRate}</td><td><button className="btn btn-danger" onClick={()=>{deleteM(item._id)}}>Delete</button></td></tr>
                        ))}
                    </tbody>
                </table>
            </div>
        :<p>No movies</p> }
        
    </main>
    );
}

export default App;
