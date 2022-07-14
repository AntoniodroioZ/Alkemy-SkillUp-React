import { useEffect } from 'react';
import { useNavigate   } from 'react-router-dom'

import Header from './Header';
import Footer from './Footer';

const Listado =() =>{

    let navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token == null){
            navigate('/', { replace: true });
        }
        console.log(token);
    },[]);

    return(
        <>
            <Header/>
            <h2>Soy el componente listado :D</h2>
            <Footer/>
        </>
    );

}
export default Listado;