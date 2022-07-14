import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login.js';
import Listado from './components/Listado';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/listado' element={<Listado/>}/>
        
        {/* <Login/>
        <Listado/> */}
      </Routes>
    </div>
  );
}

export default App;
