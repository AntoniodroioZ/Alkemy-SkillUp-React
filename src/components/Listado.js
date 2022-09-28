import { useEffect,useState } from 'react';
import { useNavigate   } from 'react-router-dom'

import { Link,Navigate } from 'react-router-dom';

import axios from 'axios';

import swAlert from '@sweetalert/with-react'

const Listado =() =>{

    let navigate = useNavigate();

    let token = sessionStorage.getItem('token');

    const [moviesList, setMoviesList] = useState([]);

    useEffect(()=>{
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=0698dc1f0a7986ba3c2aac42c6b6253c&language=es-ESpage=1';
        axios.get(endPoint)
        .then(res =>{
            const apiData = res.data;
            setMoviesList(apiData.results);
        })
        .catch(error => {
            swAlert(
                <h2>Ha ocurrido un error en el servidor :(, intenta mas tarde.</h2>
            );
        });
    },[]);

    // console.log(moviesList);

    return(
        <>
            { !token && <Navigate to="/"/>}
            <div className='container'>
                <div className='row'>
                    {
                        moviesList.map((oneMovie,idx)=> {
                            return(
                            <div className='col-4' key={idx}>
                                <div className="card my-4" >
                                    <img src={'https://image.tmdb.org/t/p/w500/'+oneMovie.poster_path} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{oneMovie.title}</h5>
                                        <p className="card-text">{oneMovie.overview.substring(0,300)+'...'}</p>
                                        <Link to={"/Detalle?movieID="+oneMovie.id} className="btn btn-primary">Go details :)</Link>
                                    </div>
                                </div>
                            </div>

                            );
                        }) 
                    }
                    
                </div>
            </div>
        </>
    );

}
export default Listado;