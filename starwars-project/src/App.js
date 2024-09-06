import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from './characters';
import Planets from './planets';
import Starships from './starships';
import Films from './films';
import Vehicles from './vehicles';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Star Wars API Project</h1>
          <p>Este é um projeto educacional para aprender a utilizar APIs e desenvolver uma aplicação front-end
          com React e JavaScript.</p>
          <nav>
            <ul>
              <li><a href="/characters">Personagens</a></li>
              <li><a href="/planets">Planetas</a></li>
              <li><a href="/starships">Naves Espaciais</a></li>
              <li><a href="/films">Filmes</a></li>
              <li><a href="/vehicles">Veículos</a></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/characters" element={<Characters />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/films" element={<Films />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
