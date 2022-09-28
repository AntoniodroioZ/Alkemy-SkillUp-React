import swAlert from '@sweetalert/with-react'

const Buscador = () =>{
    const submitHandler = e =>{
        e.preventDefault();
        const keyword1 = e.currentTarget.keyword.value.trim();
        const value = keyword1.lenght;
        console.log(keyword1.lenght);
        if(keyword1 == ""){
            swAlert(
                <h2>Tienes que escribir una palabra.</h2>
            );
            console.log(keyword1)
        }
    }
    
    return(
        <>
            <form className="d-flex items-center" onSubmit={submitHandler}>
            <input className="inputs form-control" type="text" name="keyword" id="keyword" placeholder="Escribe una palabra clave..."/>
            <button className="btn btn-success" type="submit">Ingresar</button>
            </form>
        </>
    );
}

export default Buscador;