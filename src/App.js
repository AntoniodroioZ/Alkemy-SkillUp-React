import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login.js';
import Listado from './components/Listado';
import Detalle from './components/Detalle';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/listado' element={<Listado/>}/>
        <Route exact path='/detalle' element={<Detalle/>}/>
        {/* <Login/>
        <Listado/> */}
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
