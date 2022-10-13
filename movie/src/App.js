// eslint-disable-next-line
import React, { useEffect, useState } from 'react';

function App() {
    const [loading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, [])
    console.log(movies);
    return (
        <div>
            {loading ? <h1>is Loading...</h1>
                : 
                <div>
                    {movies.map((movie) => 
                        <div key={movie.id}>
                            <img src={movie.medium_cover_image} alt="" />
                            <h3>{movie.title}</h3>
                            <p>{movie.summary}</p>
                            <ul>
                                {movie.genres.map((g) => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>)
                    }
                </div>
            }
        </div>
    );
}

export default App;
