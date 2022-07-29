import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Films from '../Films/Films';
import Sessions from '../Sessions/Sessions';
import Seats from '../Seats/Seats';
import Sucess from '../Sucess/Sucess';

import './reset.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>

      <header>
        CINEFLEX
      </header>

      <Routes>

        <Route path='/' element={<Films />}/>
        <Route path='/sessoes/:idFilme' element={<Sessions />}/>
        <Route path='/assentos/:idSession' element={<Seats />}/>
        <Route path='/sucesso' element={<Sucess />}/>

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
