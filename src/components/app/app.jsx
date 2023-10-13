import React from 'react';
import './app.css';
import Header from '../header/header';
import Main from '../main';
import RandomPlanet from '../random-planet/random-planet';

const App = () => {
    
    return (
        <div className="main">
            <Header/>
            <RandomPlanet/>
            <Main/>
        </div>
    );
};

export default App;