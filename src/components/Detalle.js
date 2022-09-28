import { Link,Navigate } from 'react-router-dom';
import axios from 'axios';

import { useEffect,useState } from 'react';

import swAlert from '@sweetalert/with-react'


const Detalle = () =>{
    let token = sessionStorage.getItem('token');
    let query = new URLSearchParams(window.location.search);
    let id = query.get('movieID');
    console.log(id);

    const [movie, setMovie] = useState([null]);
    const [genresMovie,setGenresMovie] = useState([]);
    var genRes;
    useEffect(()=>{
        const endPoint = 'https://api.themoviedb.org/3/movie/'+ id +'?api_key=0698dc1f0a7986ba3c2aac42c6b6253c&language=es-ES';
        axios.get(endPoint)
        .then(response =>{
            const movieData = response.data;
            setMovie(movieData);
            console.log(movieData);
            setGenresMovie(response.data.genres);
            console.log(genresMovie);
        })
        
        .catch(error => {
            swAlert(
                <h2>Ha ocurrido un error en el servidor :(, intenta mas tarde.</h2>
            );
        });
    },[]);
    return(
        <>
            { !token && <Navigate to="/"/>}
            { !movie && <><h2>Cargando...</h2></>}
            <div className='container'>
                { movie && <>

                
                <h2 className='content-center'>Detalles de {movie.original_title}</h2>
                <div className='content-center'>

                    <div className="card card-details">
                        <div className='content-center'>
                            <img src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path} className="card-img-top img-details" alt="movie poster"/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Titulo: {movie.original_title}</h5>
                            <h5>Fecha de estreno: {movie.release_date}</h5>
                            <p className="card-text">Resumen: {movie.overview}</p>
                            <h5>Rating: {movie.vote_average}</h5>
                            <h5>Generos:</h5>
                            {/* <ul className='genres-list'> */}
                                {genresMovie.map((oneGenre,idx) => <p className='' key={oneGenre.id}>{oneGenre.name}</p> )}
                            {/* </ul */}
                            { movie.homepage &&

                                <a href={movie.homepage} target="_blank" className="btn btn-primary">Go somewhere</a>
                            }
                        </div>
                    </div>
                </div>
                </>
                }
            </div>
            
        </>
    );
}

export default Detalle;