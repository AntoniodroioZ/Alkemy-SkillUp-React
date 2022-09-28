import { Link } from "react-router-dom";

import Buscador from "./Buscador";

const Header = () =>{
    return(
        <header className="header">
            <nav className="container content-center">
                <div>
                    <ul className="header-ul">
                        <li className="item-header">
                            <Link to="/" className="links">
                                Home
                            </Link>
                        </li>
                        <li className="item-header">
                            <Link to="/listado" className="links">
                                Listado
                            </Link>
                        </li>
                    </ul>
                </div>
                <Buscador/>
            </nav>
        </header>
    );
}

export default Header;