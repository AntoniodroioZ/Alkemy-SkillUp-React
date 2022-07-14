// npm install axios
import axios from "axios";
// npm install sweetalert
// npm install @sweetalert/with-react --force
import swAlert from '@sweetalert/with-react'

import { useNavigate   } from 'react-router-dom'

const Login = () =>{

    let navigate = useNavigate();
    // console.log(navigate);


    const submitHandler = e =>{
        e.preventDefault();
        // console.log('enviar formulario');
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email,password);
        if(email === "" || password === ""){
            // console.log("Campos vacios")
            swAlert(
                <h2>Campos vacios</h2>
            );
            return;
        }else{
            // console.log("valido")
            if(email!=='challenge@alkemy.org'|| password !== 'react'){
                // console.log('Credenciales inválidas');
                swAlert(
                    <h2>Credenciales inválidas</h2>
                );
                return;
            }
        }
        console.log('Listos para enviar información');
        
        axios.post('http://challenge-react.alkemy.org/',{email,password})
        .then(res => {
            swAlert(
                <h2>Perfecto, ingresaste correctamente</h2>
            );
            // console.log(res.data); 
            const token = res.data.token;
            console.log(token);
            localStorage.setItem('token',token); //localStorage solo maneja strings
            navigate("../listado", { replace: true });
        });
    }


    return(
        <>
            
            <h2>Formulario de Login</h2>
            <form onSubmit={submitHandler}>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <br />
                <input type="password" name="password" id="password" placeholder="Contraseña"/>
                <br />
                <button type="submit">Ingresar</button>
            </form>
        </>
    );
}

export default Login;