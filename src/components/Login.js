// npm install axios
import axios from "axios";
// npm install sweetalert
// npm install @sweetalert/with-react --force
import swAlert from '@sweetalert/with-react'

import { useNavigate, Navigate  } from 'react-router-dom'

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
            // localStorage.setItem('token',token); //localStorage solo maneja strings
            sessionStorage.setItem('token',token);
            navigate("../listado", { replace: true });
        });
    }
    let token = sessionStorage.getItem('token');

    return(
        <>
            { token &&  <Navigate to="/listado"/>}
            
            <div className="container">
                <h2>Formulario de Login</h2>
                <form onSubmit={submitHandler}>
                    <p>Ingresa tu correo electronico:</p>
                    <input className="form-control inputs" type="email" name="email" id="email" placeholder="Email"/>
                    {/* <br /> */}
                    <p>Ingresa tu contraseña</p>
                    <input className="form-control inputs" type="password" name="password" id="password" placeholder="Contraseña"/>
                    <br />
                    <button className="btn btn-success" type="submit">Ingresar</button>
                </form>
            </div>
        </>
    );
}

export default Login;