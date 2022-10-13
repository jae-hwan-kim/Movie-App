import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from "prop-types";

function Detail({float}) {
    const [loading, setLoading] = React.useState(true);
    const [movieData, setMovieData] = React.useState();
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.torrentbay.to/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setLoading(false);
        setMovieData(json.data.movie);
        console.log(json);
    };
    useEffect(() => { 
        getMovie();
    }, [])
    return (
        <div>
            {loading ? <h1> is Loading... </h1>
                : 
                <div>
                    <img
                        src={movieData.medium_cover_image}
                        style={{ float: float }}
                        alt={movieData.title}
                    />
                    <h3>{movieData.title}</h3>
                    <span>❤️{movieData.like_count}</span>
                    <p>Rating {movieData.rating}</p>
                </div>
            }
        </div>
    );
}

Detail.propTypes = {
    float: PropTypes.string.isRequired
}

export default Detail;
