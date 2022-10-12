// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

function App() {
    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movies);
                setLoading(false);
            });
    }, [])
    console.log(movies);
    return (
        <div>
            {loading ? <h1>is Loading...</h1>
                : ""
                // <select>
                //     {movies.map((item) => <option key={item.data.movie_count}>{item.data.movie.title}</option>)}
                // </select>
            }
        </div>
    );
}

export default App;
